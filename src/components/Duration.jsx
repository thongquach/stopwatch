export default function Duration({ durationMs }) {
  const hh = String(Math.floor(durationMs / 1000 / 60 / 60)).padStart(2, '0');
  const mm = String(Math.floor(durationMs / 1000 / 60) % 60).padStart(2, '0');
  const ss = String(Math.floor(durationMs / 1000) % 60).padStart(2, '0');
  const ms = String(durationMs % 1000).padStart(3, '0');

  return (
    <div>
      <code>
        <span>{hh}</span>:<span>{mm}</span>:<span>{ss}</span>.<span>{ms}</span>
      </code>
    </div>
  );
}
