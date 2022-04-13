import Duration from './Duration';

export default function InitialStopwatch({ requestStart }) {
  return (
    <>
      <h4>Initial</h4>
      <Duration durationMs={0} />
      <footer>
        <button onClick={requestStart}>Start</button>
      </footer>
    </>
  );
}
