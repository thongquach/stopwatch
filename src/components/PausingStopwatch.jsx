import Duration from "./Duration";

export default function PausingStopwatch({
  requestResume,
  requestReset,
  startTimeMs,
}) {
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
