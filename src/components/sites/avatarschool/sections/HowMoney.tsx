// Markup reproduced from the live page.
// Real <img> tags are kept on purpose: same files, sizes and loading behaviour as the source.
/* eslint-disable @next/next/no-img-element */

export function HowMoney() {
  return (
    <section className="howmoney" id="howmoney">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">💸 Como o dinheiro entra</span>
          {" "}
          <h2 className="display h2" data-split="">
            Tem empresa pagando pra você
            {" "}
            <span className="outline">postar vídeo.</span>
          </h2>
          {" "}
          <p className="lead">
            Existe uma plataforma onde grandes empresas pagam criadores por visualização.
            {" "}
            <b>Você posta. O vídeo faz views. Você recebe.</b>
          </p>
        </div>
        {" "}
        <div className="howmoney__grid">
          <figure className="howmoney__fig" data-reveal="">
            <img alt="Plataformas que pagam por vídeo, com a Higgsfield AI pagando até US$ 10.050 por vídeo, um reel com 58,7 milhões de views e maços de dólares" decoding="async" height="1024" loading="lazy" src="/sites/avatarschool/img/br/dinheiro-plataformas-720.webp" width="1536" />
            {" "}
            <figcaption className="howmoney__cap">Plataformas que pagam por vídeo postado</figcaption>
          </figure>
          {" "}
          <div className="howmoney__math" data-reveal="">
            <div className="rate">
              <span className="rate__n">US$ 1</span>
              <span className="rate__l">a cada mil views</span>
            </div>
            {" "}
            <ol className="calc">
              <li>
                <span className="calc__k">1 vídeo com 100 mil views</span>
                <span className="calc__eq">=</span>
                <b className="calc__v">US$ 100</b>
              </li>
              <li>
                <span className="calc__k">10 vídeos assim</span>
                <span className="calc__eq">=</span>
                <b className="calc__v">US$ 1.000</b>
              </li>
            </ol>
            {" "}
            <p className="howmoney__note">
              E um único reel desse formato já fez
              {" "}
              <b>36 milhões de views</b>
              . Faz a conta.
            </p>
            {" "}
            <div className="hf">
              <span className="hf__badge">até US$ 10.000</span>
              {" "}
              <p>
                E a
                {" "}
                <b>Higgsfield</b>
                , uma das maiores empresas de IA do mundo, paga até US$ 10.000 por um único vídeo.
              </p>
            </div>
          </div>
        </div>
        {" "}
        <p className="howmoney__more">
          Com um personagem viral você ainda pode fechar parceria com marcas, vender como afiliado e muito mais. Mas o jeito mais rápido de começar é esse:
          {" "}
          <b>ganhar por view.</b>
        </p>
        {" "}
        <div className="center-cta">
          <a className="btn btn-shine" data-checkout="scroll" href="#pricing">
            Quero meu personagem
            {" "}
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
