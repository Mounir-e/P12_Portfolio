import Header from "./components/Header/Index.jsx"
import Footer from "./components/Footer/Index.jsx"
import ProjectCard from "./components/ProjectCard/Index.jsx"
import SectionHeading from "./components/SectionHeading/Index.jsx"
import Form from "./components/Form/Index.jsx"
import data from "./Data.json"
import "./App.scss"

const { projects, skills } = data;

function App() {
  return (

    <div className="portfolio">
      <Header />
      <main>
        <section className="hero section" id="accueil">
          <div className="hero-content">
            <p className="eyebrow">Mon portfolio</p>
            <h1>Echakhse Mounir, Développeur Web</h1>
            <p className="hero-text">
              Ce portfolio vous présente mon parcours, mes compétences aquises au cours de ma formation et les projets
              qui démontrent mes méthodes de travail et mon approche du développement web.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                Voir mes projets
              </a>
              <a className="button button-secondary" href="#contact">
                Me contacter
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Recherche de poste">
            <p>Disponible pour :</p>
            <strong>·Premier poste<br />
            ·Mission Freelance</strong>
            <span>Front-End · Gestion de projet</span>
          </aside>
        </section>

        <section className="section about" id="apropos">
          <SectionHeading eyebrow="À propos de moi" title="Un parcours atypique à la recherche de défis" />
          <div className="about-grid">
            <article>
              <h3>Mon parcours</h3>
              <p>
                Ancien gérant de société et chauffeur VTC, j'ai décidé de changer de domaine et de me lancer un nouveau défi, effectuer une reconversion professionnelle et devenir développeur Web. Tout au long de ma formation j'ai acquis certaines compétences et une méthodologie de travail qui me permettront de m'améliorer au quotidien et de m'épanouir au sein de mon futur emploi.
              </p>
            </article>
            <article>
              <h3>Méthodologie de travail</h3>
              <p>
                Tout commence par la compréhension du besoin, la définition des objectifs à atteindre et l'organisation générale du projet. Une fois tout cela effectué, je passe à la phase de conception et de développement en suivant les étapes définies. Enfin je teste et j'optimise le projet pour m'assurer de sa qualité et de sa performance.
              </p>
            </article>
            <article>
              <h3>Mes objectifs</h3>
              <p>
                Dans un premier temps, j'ai pour but de continuer à développer mes compétences et d'effectuer une veille technologique afin de rester à jour sur les nouvelles technologies et les bonnes pratiques. En parallèle, je recherche un poste de développeur Web Front-End en tant que salarié ou en mission freelance afin de mettre en pratique mes compétences et d'évoluer dans ce domaine passionnant.
              </p>
            </article>
          </div>
        </section>

        <section className="section skills" id="competences">
          <SectionHeading eyebrow="Compétences" title="Outils, langages de programmation et librairies" />
          <ul className="skill-list" aria-label="Liste des compétences">
            {skills.map((skill) => (
              <li key={skill.id}>
                <img src={skill.image} alt={'Logo ' + skill.title} />
                <span>{skill.title}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section projects" id="projets">
          <SectionHeading eyebrow="Projets" title="les projets impactant de mon parcours" />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Discutons d&apos;un projet ou d&apos;une opportunité.</h2>
            <p>
              

            </p>
          </div>
          < Form />
        </section>

      </main>
      <a href="#top" className="scroll-top-btn" title="Retour en haut">
        <img src="/public/fleche.webp" alt="Flèche vers le haut" />
      </a>
      <Footer />

    </div>
  )
}

export default App
