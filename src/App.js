import "./App.css";
import { useState } from "react";

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  };
  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    if(!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const poppedPoint = popped.pop();
    if(!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(popped);
    
  };
  return (
    <>
      <button onClick={handleUndo}> Undo </button>
      <button onClick={handleRedo}> Redo </button>
      <div className="App" onClick={handleClick}>
        {points.map((point, index) => {
          return (
            <div
              key={index}
              className="point"
              style={{
                left: point.x - 5 + "px",
                top: point.y - 5 + "px",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
