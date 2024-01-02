import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  let [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPRSTIVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!:'@#$%^&*-_+=.,<>{}[]()|/\\";

    for (let i = 1; i <= length; i++) {
      let charindex = Math.floor(Math.random() * str.length );
      pass += str.charAt(charindex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3); // we have to keep above line also to see effect
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className=" w-full max-w-md border mx-auto shadow rounded-lg px-4 my-8 text-orange-500 bg-gray-700 border-red-800">
        <h1 className="text-white text-center  my-3"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden bg-blue-700 mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >Copy</button>
        </div>

        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length({length})</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="cursor-pointer">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="cursor-pointer">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
