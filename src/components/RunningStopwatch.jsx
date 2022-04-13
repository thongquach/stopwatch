import useNow from '../utils/useNow';
import Duration from './Duration';

export default function RunningStopwatch({ requestPause, requestStop, startTimeMs }) {
  const durationMs = useNow() - startTimeMs;

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
