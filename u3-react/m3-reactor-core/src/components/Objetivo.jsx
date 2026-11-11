export default function Objetivo({ posicion, tamano, onAtrapar }) {
  const estilo = {
    width: `${tamano}px`,
    height: `${tamano}px`,
    left: `calc((100% - ${tamano}px) * ${posicion.x})`,
    top: `calc((100% - ${tamano}px) * ${posicion.y})`,
  };

  return (
    <button
      type="button"
      className="objetivo"
      style={estilo}
      onClick={onAtrapar}
      aria-label="Objetivo"
    />
  );
}
