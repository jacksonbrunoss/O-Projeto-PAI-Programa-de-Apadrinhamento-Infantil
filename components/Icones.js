const caminhos = {
  calendario: (<><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></>),
  relogio: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  atividades: (<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.3 6L12 16.4l-5.4 3 1.3-6-4.5-4.1 6-.7z" />),
  alimentacao: (<><path d="M5 3v8a3 3 0 003 3v7M8 3v6M11 3v8a3 3 0 01-3 3" /><path d="M17 21V3c-2.5 1.5-3.5 4.5-3.5 8H17" /></>),
  livro: (<><path d="M3 5.5C5.5 4 9 4 12 6c3-2 6.5-2 9-.5V19c-2.5-1.5-6-1.5-9 .5-3-2-6.5-2-9-.5z" /><path d="M12 6v13.5" /></>),
  musica: (<><path d="M9 18V6l11-2v12" /><circle cx="6.5" cy="18" r="2.5" /><circle cx="17.5" cy="16" r="2.5" /></>),
  paleta: (<><path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2-.6-1.2 0-2.5 1.5-2.5H17a4 4 0 004-4c0-5-4-9.5-9-9.5z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></>),
  puzzle: (<path d="M10 4a2 2 0 114 0v2h4v4h-2a2 2 0 100 4h2v4h-4v-2a2 2 0 10-4 0v2H6v-4h2a2 2 0 100-4H6V6h4z" />),
  cruz: (<path d="M12 3v18M6 9h12" />),
  coracao: (<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />),
  whatsapp: (<><path d="M3 21l1.6-4.6A9 9 0 119 20.4z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.8c-.8-.3-1.7-1.2-2-2l.8-.8-1-2z" /></>),
};

export default function Icone({ nome, tamanho = 24 }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {caminhos[nome]}
    </svg>
  );
}
