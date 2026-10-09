// Markup reproduced from the live page.

export function Cast() {
  return (
    <section className="cast" id="cast">
      <div className="section-head">
        <span className="eyebrow">★ Conheça a turma</span>
        {" "}
        <h2 className="display h2" data-split="">
          Todos esses personagens estão viralizando no mundo.
          {" "}
          <span className="ink-coral italic">Mas no Brasil, ainda ninguém conhece.</span>
        </h2>
        {" "}
        <p className="lead">
          Corte tigelinha, bigodinho, paletó de tweed, uma calma assustadora. Um personagem pode comandar uma página de memes, virar o mascote de uma cafeteria ou estrelar um videoclipe. Lá fora, esses personagens já tomaram conta do feed. Aqui, o espaço ainda está livre. Agora falta o seu.
        </p>
        {" "}
        <p className="small-note">
          Retratos dos personagens da trend recriados com IA, batizados com o nome das contas de seus criadores.
        </p>
      </div>
      {" "}
      <div className="marquee" data-marquee="" data-open-label="Vaga aberta" data-open-sub="Crie seu próprio personagem">
        <div className="marquee__track" />
      </div>
      {" "}
      <div className="marquee" data-marquee="">
        <div className="marquee__track" />
      </div>
      {" "}
      <div className="cast__cta">
        <span className="drag-hint">← arraste a turma →</span>
        {" "}
        <a className="btn btn--cream" data-checkout="scroll" href="#pricing">
          Criar meu personagem
          {" "}
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
