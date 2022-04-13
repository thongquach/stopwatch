import useNow from '../utils/useNow';
import Duration from './Duration';

export default function RunningStopwatch({ requestStop, requestLap, startTimeMs }) {
  const durationMs = useNow() - startTimeMs;

  return (
    <>
      <h4>Running ...</h4>
      <Duration durationMs={durationMs} />
      <footer>
        <button onClick={requestStop}>Stop</button>
        <button onClick={requestLap}>Lap</button>
      </footer>
    </>
  );
}
