import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../_components/NavBar";

export const metadata: Metadata = {
  title: "Yuri Alves // Desenvolvedor Front-End",
  description:
    "Sou um desenvolvedor especializado em front-end. Com experiência em criar interfaces responsivas e dinâmicas usando JavaScript, React, Bootstrap, Tailwind CSS e outras tecnologias modernas. Confira meus projetos que vão de sites interativos a sistemas escaláveis e funcionais, utilizando as melhores práticas de desenvolvimento web para entregar resultados eficientes e de alto desempenho.",
  keywords: [
    "portfólio",
    "Yuri Dev",
    "desenvolvedor",
    "front-end",
    "back-end",
    "tecnologia",
    "programação",
    "React",
    "JavaScript",
    "Node.js",
    "ReactNative",
    "Javascript",
    "Desenvolvedor Web",
    "Web Developer",
    "designer gráfico",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Yuri Alves // Desenvolvedor Front-End",
    description:
      "Veja o portfólio de Yuri Dev, com projetos de front-end e back-end.",
    url: "https://www.yuridev.com",
    siteName: "Yuri Dev",
    images: [
      {
        url: "/logoTwitter.png",
        width: 1200,
        height: 630,
        alt: "Yuri Alves // Desenvolvedor Front-End",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio - Dev Yuri",
    description: "Yuri Alves, desenvolvedor front-end e back-end.",
    images: ["/logoTwitter.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      </head>
      <body>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
