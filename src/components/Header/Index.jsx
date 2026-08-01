import "./Header.scss";
import logo from "../../../public/logo.webp";

const navigationItems = [
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
];

function Header() {
  return (
    <header className="site-header">
      <a className="header-logo">
        <img src={logo} alt="Logo Echakhse Mounir" />
      </a>

      <nav className="main-nav" aria-label="Navigation principale">
        <ul className="nav-inline">
          <li>
            <details className="nav-dropdown">
              <summary className="nav-button sections-button" aria-label="Menu des sections du site">
              <span>Sections</span>
              <svg className="nav-chevron" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              </summary>

              <ul className="sections-menu">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          <li>
            <a className="nav-button nav-contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
