// Markup reproduced from the live page.

export function Hero() {
  return (
    <section className="hero" id="top">
      <div aria-hidden="true" className="hero__rays" />
      {" "}
      <div aria-hidden="true" className="hero__sun" />
      {" "}
      <div aria-hidden="true" className="clouds" data-clouds="" />
      {" "}
      <div aria-hidden="true" className="bubbles" />
      {" "}
      <div className="wrap hero__inner">
        <div className="hero__logo-wrap">
          <picture>
            <img alt="Logo da Escola de Avatares com três personagens de IA" className="hero__logo" decoding="async" fetchPriority="high" height="1216" src="/sites/avatarschool/img/br/logo-escola-avatares-960.webp" width="1275" />
          </picture>
          {" "}
          <span className="hero__sparkle s1">
            <svg>
              <use href="#i-spark" />
            </svg>
          </span>
          {" "}
          <span className="hero__sparkle s2">
            <svg>
              <use href="#i-spark" />
            </svg>
          </span>
          {" "}
          <span className="hero__sparkle s3">
            <svg>
              <use href="#i-spark" />
            </svg>
          </span>
          {" "}
          <span className="hero__sparkle s4">
            <svg>
              <use href="#i-spark" />
            </svg>
          </span>
        </div>
        {" "}
        <span className="eyebrow">
          <span className="dot-static" />
          {" "}
          A nova renda extra com IA
        </span>
        {" "}
        <h1 className="display h1">
          <span className="line">Personagens de IA estão fazendo milhões de views.</span>
          {" "}
          <span className="line outline">E já tem plataforma pagando até 10 mil dólares por vídeo.</span>
        </h1>
        {" "}
        <p className="h1-sub">
          Aprenda a criar o seu em menos de 30 minutos, sem aparecer e sem entender nada de IA. Se você sabe ler, escrever e clicar, já consegue começar a ganhar ainda hoje.
        </p>
        {" "}
        <p className="lead hero__lead">
          A Escola de Avatares revela as ferramentas de IA pouco conhecidas por trás desses vídeos e te mostra, passo a passo, como criar seu personagem, viralizar e transformar views em dinheiro.
        </p>
        {" "}
        <div className="hero__cta">
          <div className="cta-row">
            <a className="btn btn-shine" data-checkout="scroll" href="#pricing">
              Quero meu personagem
              {" "}
              <span className="arrow">→</span>
            </a>
            {" "}
            <a className="link-arrow" href="#howmoney">Veja quanto dá pra ganhar ↓</a>
          </div>
        </div>
        {" "}
        <div className="chips">
          <span className="chip">🙈 Sem aparecer</span>
          <span className="chip">🔰 Zero conhecimento em IA</span>
          <span className="chip">⚡ Pronto em menos de 30 minutos</span>
        </div>
      </div>
      {" "}
      <div aria-hidden="true" className="pop-hint">
        estoure as bolhas!
        {" "}
        <svg viewBox="0 0 50 50">
          <path d="M8 8 C 30 6, 40 20, 38 40" fill="none" stroke="#0e1b45" strokeLinecap="round" strokeWidth="2.5" />
          <path d="M31 34 L38 41 L43 33" fill="none" stroke="#0e1b45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </svg>
      </div>
      {" "}
      <div aria-hidden="true" className="cloudbank">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 200">
          <g fill="#ffffff" opacity=".85">
            <circle cx="40" cy="120" r="70" />
            <circle cx="170" cy="100" r="80" />
            <circle cx="330" cy="125" r="70" />
            <circle cx="470" cy="95" r="85" />
            <circle cx="640" cy="120" r="72" />
            <circle cx="790" cy="98" r="82" />
            <circle cx="950" cy="122" r="70" />
            <circle cx="1100" cy="96" r="84" />
            <circle cx="1260" cy="118" r="74" />
            <circle cx="1410" cy="100" r="80" />
          </g>
          <g fill="#fffaf0">
            <circle cx="-10" cy="170" r="70" />
            <circle cx="110" cy="150" r="78" />
            <circle cx="250" cy="168" r="66" />
            <circle cx="390" cy="146" r="80" />
            <circle cx="545" cy="168" r="70" />
            <circle cx="700" cy="148" r="82" />
            <circle cx="860" cy="170" r="68" />
            <circle cx="1010" cy="150" r="80" />
            <circle cx="1170" cy="170" r="70" />
            <circle cx="1320" cy="150" r="78" />
            <circle cx="1460" cy="168" r="70" />
            <rect height="40" width="1500" x="-20" y="168" />
          </g>
        </svg>
      </div>
    </section>
  );
}
