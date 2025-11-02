import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/">Kodjo Andre</a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#tech">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="socials">
          <a href="https://github.com/andre56man" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/kodjo-koua-andre-4a1a9618a/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;