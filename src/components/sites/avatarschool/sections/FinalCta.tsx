// Markup reproduced from the live page.
// Real <img> tags are kept on purpose: same files, sizes and loading behaviour as the source.
/* eslint-disable @next/next/no-img-element */

export function FinalCta() {
  return (
    <section className="final" id="enroll">
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
          <g fill="#fff3d6">
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
      {" "}
      <div aria-hidden="true" className="clouds" data-clouds="" data-few="" />
      {" "}
      <div className="wrap final__inner">
        <div className="seat" data-reveal="">
          <div className="seat__flank seat__flank--l">
            <img alt="" loading="lazy" src="/sites/avatarschool/img/characters/CS001.webp" />
          </div>
          {" "}
          <svg className="sil" preserveAspectRatio="xMidYMax meet" viewBox="0 0 200 200">
            <path d="M14 200 C18 150 52 132 100 132 C148 132 182 150 186 200 Z" fill="#0e1b45" />
            <ellipse cx="100" cy="86" fill="#0e1b45" rx="30" ry="40" />
          </svg>
          {" "}
          <div className="seat__sign">
            Brecha
            <br />
            aberta
          </div>
          {" "}
          <div className="seat__flank seat__flank--r">
            <img alt="" loading="lazy" src="/sites/avatarschool/img/characters/CS027.webp" />
          </div>
        </div>
        {" "}
        <h2 className="display h1" data-split="" style={{ maxWidth: "15ch" }}>
          A brecha está aberta.
          {" "}
          <span className="outline">Quem você vai criar agora?</span>
        </h2>
        {" "}
        <div className="final__body">
          <p>
            Enquanto você lê isso, personagens de IA estão fazendo milhões de views, e empresas estão pagando por cada uma delas. Quase ninguém no Brasil sabe como esses vídeos são feitos. Você está a um clique de saber.
          </p>
          {" "}
          <p>
            A Escola de Avatares te mostra as ferramentas, o passo a passo e como transformar views em dinheiro, mesmo que você nunca tenha usado IA.
          </p>
          {" "}
          <p className="final__kick">Chegou a sua vez de começar a ganhar.</p>
        </div>
        {" "}
        <div className="hero__cta">
          <div className="cta-row">
            <a className="btn btn-shine" data-checkout="scroll" href="#pricing">
              Quero meu personagem
              {" "}
              <span className="arrow">→</span>
            </a>
            {" "}
            <a className="link-arrow" data-checkout="pro" data-currency="BRL" data-value="29.90" href="https://go.pepperpay.com.br/ty2cr">Ou vá com tudo no Pro</a>
          </div>
          {" "}
          <div className="micro">
            <span>Garantia de 7 dias</span>
            <span>Pagamento único</span>
            <span>Acesso vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
}
