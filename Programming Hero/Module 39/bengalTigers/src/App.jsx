import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-slate-900 text-white h-screen  flex justify-center items-center text-5xl">
        Initial State
      </h1>
    </>
  );
}

export default App;
