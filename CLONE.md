# Escola de Avatares: cópia em Next.js

Reprodução da LP https://www.avatarschool.online/br/ servida na raiz (`/`).

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build de produção
```

Publicar no Vercel: importe o projeto e use as configurações padrão de Next.js.

## Onde fica cada coisa

| Original | Na cópia |
|---|---|
| `br/index.html` (marcação) | `src/components/sites/avatarschool/sections/*.tsx`, um componente por seção, na ordem de `AvatarSchoolPage.tsx` |
| `<style>` embutido | `src/components/sites/avatarschool/avatarschool.css` (sem alteração; só os caminhos das fontes mudaram) |
| `assets/js/main.js` + `clouds.js` | `src/components/sites/avatarschool/runtime.ts` (mesma lógica e valores; carregado após a primeira pintura por `SiteRuntime.tsx`) |
| `assets/vendor/*` (GSAP, ScrollTrigger, SplitText, Lenis, confetti) | pacotes npm `gsap`, `lenis`, `canvas-confetti` |
| `assets/img`, `assets/video`, `assets/fonts` | `public/sites/avatarschool/` |
| `<head>` (título, descrição, OG, robots) | `src/app/layout.tsx` |

Para editar textos, abra o componente da seção. Para trocar links de checkout, procure `data-checkout` em `sections/Pricing.tsx` e `sections/FinalCta.tsx`.
`?static=1` na URL desliga as animações, igual ao original.

## Diferenças em relação ao original

- **Rastreamento removido:** Meta Pixel (+ envio para `/api/capi/`), Utmify, Microsoft Clarity e Vercel Analytics não foram copiados.
- **Imagens em uma resolução só:** o arquivo enviado tinha só um tamanho de cada imagem. Faltam as versões maiores do logo (1275), da imagem de plataformas (1200/1536), dos depoimentos (840) e do logo do rodapé (800). Em telas retina essas imagens ficam um pouco menos nítidas. Para corrigir, coloque os arquivos em `public/sites/avatarschool/img/br/` e devolva-os ao `srcSet`.
- **Pôsteres dos reels:** gerados a partir do primeiro quadro de cada vídeo (`reel-*-poster.webp`), porque os originais não vieram.
- **Fontes:** os mesmos arquivos do Google Fonts que o site hospeda, vindos do npm (`@fontsource`). A Fraunces usada tem todos os eixos e é maior (121 KB contra 51 KB) do que o subconjunto do site.
- **Links externos mantidos:** Termos, Privacidade e Reembolsos ainda apontam para avatarschool.online. O canonical e o `og:url` também apontam para o site original, e a página continua com `noindex, nofollow`, como lá.
