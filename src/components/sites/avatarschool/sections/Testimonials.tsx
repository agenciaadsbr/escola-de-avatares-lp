// Markup reproduced from the live page.
// Real <img> tags are kept on purpose: same files, sizes and loading behaviour as the source.
/* eslint-disable @next/next/no-img-element */

export function Testimonials() {
  return (
    <section className="depos" id="depoimentos">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">💬 Mensagens de alunos</span>
          {" "}
          <h2 className="display h2" data-split="">
            Quem aplicou,
            {" "}
            <span className="outline">mandou print.</span>
          </h2>
        </div>
        {" "}
        <div className="depos__grid">
          <figure className="depo" data-reveal="">
            <img alt="Conversa no WhatsApp com o aluno Lucas: postou 6 vídeos na semana, dois passaram de 100 mil visualizações e recebeu R$ 700 da plataforma nos 3 primeiros dias" decoding="async" height="1492" loading="lazy" src="/sites/avatarschool/img/br/depoimentos/depo-lucas-420.webp" width="840" />
          </figure>
          {" "}
          <figure className="depo" data-reveal="">
            <img alt="Conversa no WhatsApp com o aluno Felipe: conseguiu um emprego mostrando um vídeo feito com o método em vez de currículo" decoding="async" height="1492" loading="lazy" src="/sites/avatarschool/img/br/depoimentos/depo-felipe-420.webp" width="840" />
          </figure>
          {" "}
          <figure className="depo" data-reveal="">
            <img alt="Conversa no WhatsApp com o aluno André: um vídeo passou de 10 milhões de visualizações e ele fez 487 vendas do produto que indica" decoding="async" height="1493" loading="lazy" src="/sites/avatarschool/img/br/depoimentos/depo-andre-420.webp" width="840" />
          </figure>
        </div>
        {" "}
        <p className="depos__note">Fotos de perfil ocultadas. Resultados variam de pessoa para pessoa.</p>
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
