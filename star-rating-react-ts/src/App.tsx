import { useState } from "react";
import "./App.css";
import { ControlledStarRating, StarRating } from "./components";

function App() {
  const [rating, setRating] = useState(3);

  const handleOnChange = (value: number) => {
    setRating(value);
  };

  return (
    <main>
      {/* only support controlled */}
      <h2>Controlled Only</h2>
      <ControlledStarRating />

      {/* support both controlled and uncontrolled */}
      <h2>Controlled + Uncontrolled</h2>
      <StarRating rating={rating} onChange={handleOnChange} />
    </main>
  );
}

export default App;
