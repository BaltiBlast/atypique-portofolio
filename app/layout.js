import { Geist, League_Gothic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
});

export const metadata = {
  title: "ATYPIQUE. | Studio indépendant de développement web",
  description:
    "ATYPIQUE., studio indépendant de développement web : missions freelance back-end, création de projets web complets et expériences interactives dans le Lab.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${leagueGothic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
