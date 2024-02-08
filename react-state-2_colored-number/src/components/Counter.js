// import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
export default function Counter({ count, setCount }) {
  // const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
            console.log(count);
          }}
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
