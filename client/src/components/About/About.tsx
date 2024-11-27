import "./About.css";

export default function About() {
  return (
    <section>
      <article>
        <h2>Pop-Corn Box</h2>
        <p className="about">
          Pop-Corn Box est le projet n°2 de 4 développeurs web issus de la promo
          2025 de la Wild Code Shool Bordeaux en collabortion avec l'API de The
          Movie Database (TMDb) pour afficher des informations sur les films et
          les séries et les Anims.
        </p>
      </article>
      <article>
        <h2>La team</h2>
        <img className="team-pic" src="/Pop-corn Box Team.jpg" alt="" />
        <h2>Qui sommes nous !</h2>
        <p className="about">
          Rencontrez notre équipe de développeurs passionnés et talentueux.
          Notre équipe de magiciens du Web a su transformer de simples projets
          sur papier en véritables projets concrets.
          <br /> Notre méthode ? Vous proposer des applications web
          fonctionnelles tout en respectant les critères d’accessibilité en
          vigueur. <br />
          Grâce à une approche collaborative, nous écoutons vos besoins et
          imaginons des solutions adaptées, en restant attentifs aux détails qui
          feront toute la différence. <br />
          Nous sommes là pour vous guider, de la conception à la mise en ligne,
          et faire de votre projet un véritable succès. Nous manions les lignes
          de développement comme des virtuoses et transforment les bugs en
          fonctionnalités (parfois même volontairement). <br />
          Toujours en quête de perfection, nous ne lâchons jamais notre café ni
          notre clavier !
        </p>
        <h2 className="team-member">Team members</h2>
        <ul className="members">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/florian-minicelle-692b9516b/"
              rel="noreferrer"
            >
              Florian
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aghiles-belkalem-10871323b/"
              rel="noreferrer"
            >
              Aghiles
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nino-jautee-aa2723321/"
              rel="noreferrer"
            >
              Nino
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/geoffrey-leglise/"
              rel="noreferrer"
            >
              Geoffrey
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
