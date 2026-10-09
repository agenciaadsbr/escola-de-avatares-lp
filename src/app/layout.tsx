import type { Metadata, Viewport } from "next";

import "@/components/sites/avatarschool/avatarschool.css";
import { MetaPixel } from "@/components/sites/avatarschool/MetaPixel";

const description =
  "Crie vídeos virais ultrarrealistas com IA. Aprenda o método dos personagens de IA super-realistas: as ferramentas secretas de IA por trás desses vídeos, reveladas passo a passo. A partir de R$ 19,90.";

// Same head as https://www.avatarschool.online/br/ (canonical and og:url still point there).
export const metadata: Metadata = {
  title: "Escola de Avatares | Crie vídeos virais ultrarrealistas com IA.",
  description,
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.avatarschool.online/br/",
    languages: {
      "pt-BR": "https://www.avatarschool.online/br/",
      en: "https://www.avatarschool.online/",
      "x-default": "https://www.avatarschool.online/",
    },
  },
  openGraph: {
    type: "website",
    title: "Escola de Avatares | Vaga aberta. Quem você vai criar agora?",
    description:
      "Crie vídeos virais ultrarrealistas com IA. O método que ensinamos: crie um personagem de IA ultrarrealista e coloque-o em vídeos reais. A partir de R$ 19,90.",
    locale: "pt_BR",
    url: "https://www.avatarschool.online/br/",
    images: [
      {
        url: "https://www.avatarschool.online/assets/img/og-br.jpg",
        width: 1200,
        height: 630,
        alt: "Escola de Avatares: Crie vídeos virais ultrarrealistas com IA.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.avatarschool.online/assets/img/og-br.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#bfe8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // "no-js" is removed by the page runtime, exactly as on the live page
    <html lang="pt-BR" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/sites/avatarschool/fonts/fraunces-normal-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/sites/avatarschool/fonts/dmsans-normal-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
