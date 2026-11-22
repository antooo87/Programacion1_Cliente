export default function MensajeError({ id, error }) {
  if (!error) {
    return null;
  }
  return (
    <p id={id} className="error" role="alert">
      {error.message}
    </p>
  );
}
