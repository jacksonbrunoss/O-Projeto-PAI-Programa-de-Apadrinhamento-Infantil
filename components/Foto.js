import Icone from "./Icones";

// Mostra a foto real quando "src" for informado; caso contrário,
// exibe um espaço neutro com ícone, pronto para receber a foto autorizada.
export default function Foto({ src, alt, icone, cor = "azul", proporcao = "4 / 3" }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="foto" src={src} alt={alt} style={{ aspectRatio: proporcao }} />;
  }
  return (
    <div className={`foto foto-vazia cor-${cor}`} style={{ aspectRatio: proporcao }} role="img" aria-label={alt}>
      {icone && <Icone nome={icone} tamanho={48} />}
    </div>
  );
}
