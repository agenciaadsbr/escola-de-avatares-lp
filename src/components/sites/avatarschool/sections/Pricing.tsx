// Markup reproduced from the live page.
// Real <img> tags are kept on purpose: same files, sizes and loading behaviour as the source.
/* eslint-disable @next/next/no-img-element */

export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div aria-hidden="true" className="clouds" data-clouds="" data-few="" />
      {" "}
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">🎟️ Matrículas abertas</span>
          {" "}
          <h2 className="display h2" data-split="">
            Escolha sua turma.
            {" "}
            <span className="outline">Garanta sua carteirinha.</span>
          </h2>
          {" "}
          <p className="lead">
            Duas portas de entrada. Pagamento único. Acesso vitalício. Aprenda hoje mesmo o método exato por trás desses vídeos.
          </p>
        </div>
        {" "}
        <div className="plans">
          <article className="idcard" data-reveal="">
            <div className="idcard__band">
              <span>Carteirinha · Starter</span>
              <span className="chipicon" />
            </div>
            {" "}
            <div className="idcard__top">
              <div className="idcard__photo">
                <svg viewBox="0 0 200 260">
                  <rect fill="#eacd78" height="260" width="200" />
                  <g transform="translate(0 40)">
                    <path d="M14 220 C18 170 52 152 100 152 C148 152 182 170 186 220 Z" fill="#0e1b45" />
                    <ellipse cx="100" cy="96" fill="#0e1b45" rx="32" ry="42" />
                    <path d="M58 80 C58 40 78 28 100 28 C122 28 142 40 142 80 C142 86 136 88 130 86 C112 80 88 80 70 86 C64 88 58 86 58 80 Z" fill="#f2673f" stroke="#0e1b45" strokeWidth="4" />
                  </g>
                </svg>
              </div>
              {" "}
              <div>
                <h3 className="idcard__name">Starter</h3>
                <p className="idcard__tagline">O método essencial. Crie, troque, finalize, poste.</p>
              </div>
            </div>
            {" "}
            <div className="price">
              <b>
                <sup>R$</sup>
                19
                <sup>,90</sup>
              </b>
              <span>
                pagamento
                <br />
                único
              </span>
            </div>
            {" "}
            <ul className="idcard__list">
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 1:</b>
                  {" "}
                  O Formato, Decifrado
                </span>
              </li>
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 2:</b>
                  {" "}
                  Crie Seu Personagem (super-realista, idêntico em todos os vídeos)
                </span>
              </li>
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 3:</b>
                  {" "}
                  O Vídeo Base (grave, peça para um amigo ou use qualquer vídeo da internet)
                </span>
              </li>
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 4:</b>
                  {" "}
                  As Ferramentas Secretas de IA, Reveladas (cada ferramenta por trás desses vídeos, com nome e sobrenome)
                </span>
              </li>
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 5:</b>
                  {" "}
                  Acabamento, Postagem e Selo de IA (nítido, até 4K, pronto para postar)
                </span>
              </li>
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Aulas clique a clique, feitas para iniciantes</span>
              </li>
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Acesso vitalício ao método essencial</span>
              </li>
              <li className="dim">
                <svg>
                  <use href="#i-x" />
                </svg>
                <span>Persona, trocas avançadas, guia de monetização e Cofre de Prompts</span>
              </li>
            </ul>
            {" "}
            <div className="idcard__foot">
              <a className="btn btn--cream btn--block" data-checkout="starter" data-currency="BRL" data-value="19.90" href="https://go.pepperpay.com.br/3o0dk">
                Quero o Starter por R$ 19,90
                {" "}
                <span className="arrow">→</span>
              </a>
              {" "}
              <div aria-hidden="true" className="barcode" />
              {" "}
              <div className="idcard__valid">
                <span>VALIDADE: VITALÍCIA</span>
                <span>CS-STR-019</span>
              </div>
            </div>
          </article>
          {" "}
          <article className="idcard idcard--pro" data-reveal="">
            <div className="badge-stamp">
              <svg viewBox="0 0 100 100">
                <path d="M50 3l7 10 12-4 2 12 12 2-4 12 10 7-10 7 4 12-12 2-2 12-12-4-7 10-7-10-12 4-2-12-12-2 4-12-10-7 10-7-4-12 12-2 2-12 12 4z" fill="currentColor" stroke="#0e1b45" strokeWidth="2.5" />
              </svg>
              <span>
                QUERIDINHO
                <br />
                DO PROFESSOR
              </span>
            </div>
            {" "}
            <div className="idcard__band">
              <span>Carteirinha · Pro</span>
              <span className="chipicon" />
            </div>
            {" "}
            <div className="idcard__top">
              <div className="idcard__photo">
                <img alt="Foto da carteirinha de estudante do personagem de IA" loading="lazy" src="/sites/avatarschool/img/characters/CS015.webp" />
              </div>
              {" "}
              <div>
                <h3 className="idcard__name">Pro</h3>
                <p className="idcard__tagline">Tudo o que você precisa para construir o personagem, a página e o negócio em volta dele.</p>
              </div>
            </div>
            {" "}
            <div className="price">
              <b>
                <sup>R$</sup>
                29
                <sup>,90</sup>
              </b>
              <span>
                pagamento
                <br />
                único · o mais completo
              </span>
            </div>
            {" "}
            <ul className="idcard__list">
              <li>
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Tudo do Starter (Módulos 1 a 5), incluindo as ferramentas secretas, sem tarja</b>
                </span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 6:</b>
                  {" "}
                  A Fábrica de Persona (nome, bordão, legendas, música, ritmo de postagem, responder sem sair do personagem)
                </span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 7:</b>
                  {" "}
                  Trocas Avançadas (vídeos de dança, mini-histórias, vídeos mais longos, correção de falhas)
                </span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  <b>Módulo 8:</b>
                  {" "}
                  Monetização na Prática, o guia dos 7 caminhos para colocar seu personagem para trabalhar
                </span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  O Cofre de Prompts: prompts prontos para copiar e colar, para personagens, trocas e correções
                </span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Modelos de biblioteca de personagem e de consistência</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Ideias de cena prontas para usar nos seus vídeos base</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Modelos de legenda, gancho e bordão</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Guia de postagem para Instagram e TikTok</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Modelos de proposta para marcas e de tabela de preços, com checklist para sinalizar publi</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Kit de serviço sob encomenda: preço, proposta e entrega para atender empresas</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>
                  Checklist de segurança nas plataformas: selo de IA, sinalização de publi, nada de se passar por outra pessoa
                </span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>O Lab de Atualizações: aulas novas sempre que surgir uma ferramenta de IA melhor</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Todos os módulos Pro futuros incluídos</span>
              </li>
              <li className="plus-item">
                <svg>
                  <use href="#i-check" />
                </svg>
                <span>Acesso vitalício</span>
              </li>
            </ul>
            {" "}
            <div className="idcard__foot">
              <a className="btn btn-shine btn--block" data-checkout="pro" data-currency="BRL" data-value="29.90" href="https://go.pepperpay.com.br/ty2cr">
                Quero o Pro por R$ 29,90
                {" "}
                <span className="arrow">→</span>
              </a>
              {" "}
              <div aria-hidden="true" className="barcode" />
              {" "}
              <div className="idcard__valid">
                <span>VALIDADE: VITALÍCIA</span>
                <span>CS-PRO-029</span>
              </div>
            </div>
          </article>
        </div>
        {" "}
        <div className="plans__note">
          <p className="micro">
            <span>
              <svg>
                <use href="#i-shield" style={{ color: "#7fdcb5" }} />
              </svg>
              {" "}
              Garantia de 7 dias nos dois planos
            </span>
            <span>Pagamento único, sem mensalidade</span>
            <span>Acesso vitalício</span>
          </p>
          {" "}
          <div className="founding">
            <span className="founding__ico">🎓</span>
            <p>
              Turma fundadora. Pague uma vez e o plano é seu para sempre. Os fundadores do Pro também recebem todos os módulos Pro futuros e todas as aulas do Lab de Atualizações, sem pagar nada a mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
