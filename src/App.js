import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
function UseNow() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let id;
    function repaint() {
      setNow(Date.now());
      id = requestAnimationFrame(repaint);
    }
    repaint();
    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  return now;
}

function Duration({ durationMs }) {
  const hh = String(Math.floor(durationMs / 1000 / 60 / 60)).padStart(2, "0");
  const mm = String(Math.floor(durationMs / 1000 / 60) % 60).padStart(2, "0");
  const ss = String(Math.floor(durationMs / 1000) % 60).padStart(2, "0");
  const ms = String(durationMs / 1000).padStart(3, "0");

  return (
    <div>
      <code>
        <span>{hh}</span>:<span>{mm}</span>:<span>{ss}</span>.<span>{ms}</span>
      </code>
    </div>
  );
}

function StopWatchinInitial({ requestStart }) {
  const durationMs = 0;
  return (
    <div>
      <h4>Initial</h4>
      <Duration durationMs={durationMs} />
      <footer>
        <button onClick={requestStart}>Start</button>
      </footer>
    </div>
  );
}

function StopWatchRunning({ requestPause, requestStop, startTimeMs }) {
  const durationMs = UseNow() - startTimeMs;
  return (
    <div>
      <h4>Running</h4>
      <Duration durationMs={durationMs} />
      <footer>
        <button onClick={requestPause}>Pause</button>
        <button onClick={requestStop}>Stop</button>
      </footer>
    </div>
  );
}

function StopWatchPausing({ requestResume, requestReset, startTimeMs }) {
  return (
    <div>
      <h4>Pausing</h4>
      <Duration durationMs={startTimeMs} />
      <footer>
        <button onClick={requestResume}>Resume</button>
        <button onClick={requestReset}>Stop</button>
      </footer>
    </div>
  );
}
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
      {initial && (
        <div>{<StopWatchinInitial requestStart={handleStart} />}</div>
      )}

      {running && (
        <div>
          {
            <StopWatchRunning
              requestPause={handlePauseResume}
              requestStop={handleReset}
              startTimeMs={time}
            />
          }
        </div>
      )}

      {isPausing && (
        <div>
          {
            <StopWatchPausing
              requestResume={handlePauseResume}
              requestReset={handleReset}
              startTimeMs={time}
            />
          }
        </div>
      )}
    </div>
  );
}

export default App;
