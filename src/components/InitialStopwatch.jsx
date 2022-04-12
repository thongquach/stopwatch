import Duration from "./Duration";

export default function InitialStopwatch({ requestStart }) {
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
