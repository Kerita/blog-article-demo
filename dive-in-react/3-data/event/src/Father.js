import "./styles.css";
import { useEffect, useState } from "react";
import Child from "./child";
import Brother from "./Brother";
import eventEmitter from "./eventEmitter";

export default function App() {
  const [text, setText] = useState("init");

  useEffect(() => {
    eventEmitter.on("changeText", (value) => {
      setText(value);
    });
  }, []);

  return (
    <div className="App">
      <Child />
      <Brother text={text} />
    </div>
  );
}
