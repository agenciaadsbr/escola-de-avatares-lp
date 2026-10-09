// Markup reproduced from the live page.

export function Money() {
  return (
    <section className="money" id="money">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow" style={{ background: "var(--butter)" }}>💸 Excursão da turma: o dinheiro</span>
          {" "}
          <h2 className="display h2" data-split="">
            Sim, gente de mentira tem
            {" "}
            <span style={{ color: "var(--butter)" }}>renda extra de verdade.</span>
          </h2>
          {" "}
          <p className="lead">
            Um personagem com público é, no fundo, uma pequena empresa de mídia de bigode. Aqui vão 7 caminhos. Alguns a gente já flagrou por aí, outros são programas comuns para criadores. Nenhum é automático. São possibilidades, não promessas.
          </p>
        </div>
        {" "}
        <div className="paths">
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-video" />
              </svg>
            </div>
            <span className="path__tag">Flagrado por aí</span>
            <h3>Vídeos personalizados</h3>
            <p>
              {"Um personagem \"cavalheiro\" feito com IA oferece vídeos personalizados no Cameo a partir de US$ 20. Parabéns de aniversário, só que com cara de paisagem."}
            </p>
          </article>
          {" "}
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-ads" />
              </svg>
            </div>
            <span className="path__tag">Flagrado por aí</span>
            <h3>Espaço para anúncio</h3>
            <p>
              {"Algumas páginas de personagens vendem espaço publicitário, literalmente um quadradinho escrito \"SEU ANÚNCIO AQUI\". Muito anos 2000. Muito real."}
            </p>
          </article>
          {" "}
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-merch" />
              </svg>
            </div>
            <span className="path__tag">Flagrado por aí</span>
            <h3>Merch e lojinha</h3>
            <p>
              Algumas contas de personagens já têm lojinha de produtos e presentes. Coloque aquele rosto numa caneca, numa camiseta ou num adesivo.
            </p>
          </article>
          {" "}
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-brand" />
              </svg>
            </div>
            <h3>Parcerias com marcas</h3>
            <p>
              Seu personagem passa na frente de uma loja, segura um produto, solta o bordão. Sempre sinalize com clareza: #publi e o selo de parceria paga da plataforma. O CONAR orienta identificar publicidade de forma clara.
            </p>
          </article>
          {" "}
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-payout" />
              </svg>
            </div>
            <h3>Monetização das plataformas</h3>
            <p>
              Programas de monetização das plataformas, como a receita dos Shorts do YouTube e os programas para criadores do TikTok e do Facebook, conforme as regras e a disponibilidade de cada uma.
            </p>
          </article>
          {" "}
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-dfy" />
              </svg>
            </div>
            <h3>Serviço sob encomenda</h3>
            <p>
              A cafeteria da esquina bem que merecia um anúncio que as pessoas queiram ver de verdade. Crie um mascote cara de paisagem só para ela e cobre pelo serviço.
            </p>
          </article>
          {" "}
          <article className="path" data-reveal="">
            <div className="path__ico">
              <svg>
                <use href="#m-link" />
              </svg>
            </div>
            <h3>Afiliados e produtos próprios</h3>
            <p>
              Indique para o seu público ferramentas que você usa de verdade (avisando com clareza que é link de afiliado) ou algo que você mesmo criou. Tipo um curso. Tipo esta página. Oi.
            </p>
          </article>
        </div>
        {" "}
        <p className="disclaimer">
          Aviso sobre ganhos: estes são exemplos que vimos publicamente e programas comuns para criadores. Não são resultados dos nossos alunos (o curso é novinho em folha) e não são previsões do quanto você vai ganhar. Muita gente que tenta qualquer negócio como criador ganha pouco ou nada. Seus resultados dependem do seu personagem, do seu esforço, da sua constância, das regras das plataformas, dos algoritmos e da sorte. Os programas têm regras de elegibilidade. Não garantimos renda, visualizações, seguidores nem viralização.
        </p>
      </div>
    </section>
  );
}
