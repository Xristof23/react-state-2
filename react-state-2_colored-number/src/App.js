import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);
  return <Counter count={count} setCount={setCount} />;
}
