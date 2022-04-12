import { useState } from "react";
import "./App.css";
import InitialStopwatch from "./components/InitialStopwatch";
import RunningStopwatch from "./components/RunningStopwatch";
import PausingStopwatch from "./components/PausingStopwatch";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(Date.now());

  const initial = !isActive;
  const running = isActive && !isPaused;
  const isPausing = isActive && isPaused;

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    setTime(Date.now() - time);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(Date.now());
  };

  return (
    <div>
      {initial && <InitialStopwatch requestStart={handleStart} />}

      {running && (
        <RunningStopwatch
          requestPause={handlePauseResume}
          requestStop={handleReset}
          startTimeMs={time}
        />
      )}

      {isPausing && (
        <PausingStopwatch
          requestResume={handlePauseResume}
          requestReset={handleReset}
          startTimeMs={time}
        />
      )}
    </div>
  );
}

export default App;
