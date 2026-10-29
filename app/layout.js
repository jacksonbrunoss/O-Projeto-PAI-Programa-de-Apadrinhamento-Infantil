import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { site } from "../data/conteudo";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--fonte-titulo",
  display: "swap",
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--fonte-texto",
  display: "swap",
});

export const metadata = {
  title: site.titulo,
  description: site.descricao,
  icons: { icon: "/logo.png" },
  openGraph: { title: site.titulo, description: site.descricao, images: ["/logo.png"], locale: "pt_BR", type: "website" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0b3d91" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
