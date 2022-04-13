import { useState } from 'react';
import './App.css';
import InitialStopwatch from './components/InitialStopwatch';
import RunningStopwatch from './components/RunningStopwatch';
import StoppedStopwatch from './components/StoppedStopwatch';
import Laps from './components/Laps';

const MAX_LAPS = 10;

function App() {
  const [isInitial, setIsInitial] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState();
  const [laps, setLaps] = useState([]);

  const handleStart = () => {
    setIsInitial(false);
    setIsRunning(true);
    setTime(Date.now());
  };

  const handleStopResume = () => {
    setIsRunning(!isRunning);
    setTime(Date.now() - time);
  };

  const handleLap = () => {
    const newLaps = [...laps, Date.now() - time];

    if (newLaps.length <= MAX_LAPS) setLaps(newLaps);
    else setLaps(newLaps.slice(1));
  };

  const handleReset = () => {
    setIsInitial(true);
    setLaps([]);
    setTime(Date.now());
  };

  return (
    <>
      {isInitial && <InitialStopwatch requestStart={handleStart} />}
      {isRunning && (
        <RunningStopwatch
          requestStop={handleStopResume}
          requestLap={handleLap}
          startTimeMs={time}
        />
      )}
      {!isInitial && !isRunning && (
        <StoppedStopwatch
          requestReset={handleReset}
          requestResume={handleStopResume}
          startTimeMs={time}
        />
      )}
      <Laps laps={laps} />
    </>
  );
}

export default App;
