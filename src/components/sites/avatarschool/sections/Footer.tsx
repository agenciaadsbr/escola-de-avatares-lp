// Markup reproduced from the live page.
// Real <img> tags are kept on purpose: same files, sizes and loading behaviour as the source.
/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <img alt="Escola de Avatares" className="footer__logo" height="381" loading="lazy" src="/sites/avatarschool/img/br/logo-escola-avatares-footer-400.webp" width="400" />
            {" "}
            <p>Crie vídeos virais ultrarrealistas com IA. Métodos honestos.</p>
          </div>
          {" "}
          <nav aria-label="Informações legais" className="footer__links">
            <a href="https://www.avatarschool.online/br/termos.html">Termos</a>
            <a href="https://www.avatarschool.online/br/privacidade.html">Privacidade</a>
            <a href="https://www.avatarschool.online/br/reembolso.html">Reembolsos</a>
            <a href="mailto:hello@charactersschool.com">Contato</a>
          </nav>
        </div>
        {" "}
        <div className="footer__legal">
          <p>
            <b>Aviso sobre IA:</b>
            {" "}
            Os personagens desta página são gerados por IA, e alguns aparecem em cenas que parecem reais. Eles não são pessoas reais. Nós identificamos o conteúdo feito com IA e ensinamos nossos alunos a fazer o mesmo.
          </p>
          {" "}
          <p>
            <b>Aviso sobre ganhos:</b>
            {" "}
            A Escola de Avatares é um curso educacional. Não garantimos renda, visualizações, seguidores nem viralização. Os números desta página se referem a publicações públicas de terceiros, conforme observado em 1º de outubro de 2026. Eles não são resultados de alunos e não são típicos. Seus resultados dependem do seu esforço, da sua constância e de fatores que fogem do controle de qualquer pessoa.
          </p>
          {" "}
          <p>
            <b>Sem afiliação:</b>
            {" "}
            A Escola de Avatares é um curso independente. Não é afiliada, endossada nem patrocinada por Instagram, Facebook ou Meta; TikTok ou ByteDance; YouTube ou Google; Cameo; nenhum fornecedor de ferramentas de IA; nem por qualquer criador, conta ou personagem exibido nesta página. Todas as marcas pertencem aos seus respectivos titulares. Os reels de terceiros são exibidos com crédito; os criadores podem solicitar a remoção pelo e-mail
            {" "}
            <a href="mailto:hello@charactersschool.com">hello@charactersschool.com</a>
            .
          </p>
          {" "}
          <p>
            ©
            {" "}
            <span id="year">2026</span>
            {" "}
            Escola de Avatares
          </p>
        </div>
      </div>
    </footer>
  );
}
