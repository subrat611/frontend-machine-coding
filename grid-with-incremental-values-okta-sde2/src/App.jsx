import { useState } from "react";

const Cell = ({ count }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [val, setVal] = useState(count); // if empty existing number + 1 if not then existing number

  const handleCellCount = () => {
    setVal((prev) => (isEmpty ? prev + 1 : count));
    setIsEmpty(false);
  };

  return (
    <div className="grid-cell" onClick={handleCellCount}>
      {isEmpty ? "" : val}
    </div>
  );
};

const Grid = ({ size = 0 }) => {
  // helper function
  const generateGrid = () => {
    const gridArray = [];
    let count = 1;

    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(<Cell key={count} count={count} />);
        count++;
      }

      gridArray.push(
        <div key={i} className="grid-row">
          {row}
        </div>
      );
    }

    return gridArray;
  };

  return <div className="grid">{generateGrid()}</div>;
};

function App() {
  const [gridCount, setGridCount] = useState(0);
  const [isGridRender, setIsGridRender] = useState(false);

  const handleGridCount = (event) => {
    setIsGridRender(false);

    const { value } = event.target;
    setGridCount(value < 0 ? 0 : value);
  };

  const handleGridRender = () => {
    if (gridCount > 0) {
      setIsGridRender((prev) => !prev);
    }
  };

  return (
    <div className="container">
      <div className="grid-controler">
        <input type="number" onChange={handleGridCount} value={gridCount} />
        <button onClick={handleGridRender}>Render</button>
      </div>

      {isGridRender && <Grid size={gridCount} />}
    </div>
  );
}

export default App;
