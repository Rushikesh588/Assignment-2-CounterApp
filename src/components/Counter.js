import React from "react";
import { useState } from "react";
import "../App.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const Inc = () => {
    count < 25 ? setCount(count + 1) : alert("Count exceeds 💯");
  };

  const reset = () => {
    setCount(0);
  };

  const Dec = () => {
    count > 0 ? setCount(count - 1) : alert("Cant decreae any more 👍");
  };

  return (
    <div>
      <main>
        <div className="container">
          <h1>Counter</h1>
          <span id="value">{count}</span>
          <div className="button-container">
            <button onClick={Inc} className="btn decrease">
              Increase
            </button>
            <button onClick={reset} className="btn reset">
              Reset
            </button>
            <button onClick={Dec} className="btn increase">
              Decrease
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
