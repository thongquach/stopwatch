import Duration from './Duration';

export default function StoppedStopwatch({ requestReset, requestResume, startTimeMs }) {
  return (
    <>
      <h4>Stopped</h4>
      <Duration durationMs={startTimeMs} />
      <footer>
        <button onClick={requestReset}>Reset</button>
        <button onClick={requestResume}>Resume</button>
      </footer>
    </>
  );
}
