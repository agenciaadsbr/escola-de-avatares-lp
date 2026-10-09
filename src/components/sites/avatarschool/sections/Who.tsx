// Markup reproduced from the live page.

export function Who() {
  return (
    <section className="who" id="who">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">🎒 Secretaria de matrículas</span>
          {" "}
          <h2 className="display h2" data-split="">
            Você vai conseguir.
            {" "}
            <span className="ink-coral">Mesmo começando do zero.</span>
          </h2>
        </div>
        {" "}
        <div className="panel panel--fx panel--solo" data-reveal="">
          <span className="panel__stamp">SEM DESCULPAS</span>
          {" "}
          <ul className="checks">
            <li>
              <span className="ck ck--star">
                <svg>
                  <use href="#i-spark" />
                </svg>
              </span>
              <span>
                <b>Nunca usou IA?</b>
                {" "}
                Você cria seu primeiro personagem em um único dia.
              </span>
            </li>
            <li>
              <span className="ck ck--star">
                <svg>
                  <use href="#i-spark" />
                </svg>
              </span>
              <span>
                <b>Nunca editou nada?</b>
                {" "}
                {"Transforma um vídeo comum em um \"peraí, isso é real?\"."}
              </span>
            </li>
            <li>
              <span className="ck ck--star">
                <svg>
                  <use href="#i-spark" />
                </svg>
              </span>
              <span>
                <b>Não quer aparecer?</b>
                {" "}
                Seu personagem é o rosto. Você nunca mostra o seu.
              </span>
            </li>
            <li>
              <span className="ck ck--star">
                <svg>
                  <use href="#i-spark" />
                </svg>
              </span>
              <span>
                <b>Não sabe desenhar?</b>
                {" "}
                É só descrever o personagem e a IA faz o resto.
              </span>
            </li>
          </ul>
        </div>
        {" "}
        <div className="center-cta">
          <a className="btn" data-checkout="scroll" href="#pricing">
            Quero meu personagem
            {" "}
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
