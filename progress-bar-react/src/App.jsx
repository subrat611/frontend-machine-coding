import ProgressBar from "./components/progress-bar";

function App() {
  return (
    <div>
      <ProgressBar
        value={30}
        renderLabel={(percentage) => <span>Uploading... {percentage}%</span>}
      />
      <br />
      <ProgressBar
        value={130}
        max={120}
        renderLabel={(percentage) => <span>Uploading... {percentage}%</span>}
      />
    </div>
  );
}

export default App;
