import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 border ">
          <div className="flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("Red");
              }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "Orange" }}
              onClick={() => {
                setColor("Orange");
              }}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                setColor("Yellow");
              }}
            >
              yellow
            </button>
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "Green" }}
              onClick={() => {
                setColor("Green");
              }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "Blue" }}
              onClick={() => {
                setColor("Blue");
              }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "Indigo" }}
              onClick={() => {
                setColor("Indigo");
              }}
            >
              Indigo
            </button>
            <button
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "violet" }}
              onClick={() => {
                setColor("violet");
              }}
            >
              violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
