"use client";
import { useState } from "react";

export default function CopiarPix({ chave }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(chave);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      window.prompt("Copie a chave Pix:", chave);
    }
  }

  return (
    <button type="button" className="btn btn-azul" onClick={copiar} aria-live="polite">
      {copiado ? "Chave copiada!" : "Copiar chave Pix"}
    </button>
  );
}
