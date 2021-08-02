import eventEmitter from "./eventEmitter";

export default function Child({ text, onClick }) {
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            eventEmitter.emit("changeText", "子组件通过发布订阅模式改变");
          }}
        >
          子组件改变父组件文本
        </button>
      </div>
    </div>
  );
}
