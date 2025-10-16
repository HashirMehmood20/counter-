import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't go below 0!");
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        borderRadius: "20px",
        padding: "20px",
        margin: "20px",
        textAlign: "center",
        color: "white",
        width: "300px"
      }}
    >
      <h2>Count: {count}</h2>

      <button style={{ borderRadius: "10px", width: "150px" }} onClick={increase}>
        Increase
      </button>
      <br />
      <button style={{ borderRadius: "10px", width: "150px" }} onClick={decrease}>
        Decrease
      </button>
      <br />
      <button style={{ borderRadius: "10px", width: "150px" }} onClick={reset}>
        Reset
      </button>
      <br />
    </div>
  );
}

export default App;
