import Duration from './Duration';

export default function Laps({ laps }) {
  return (
    <>
      <h4>Laps</h4>
      {laps.map((lap) => (
        <Duration key={lap} durationMs={lap} />
      ))}
    </>
  );
}
