import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faFigma, 
  faGitAlt, 
  faGithub, 
  faFlutter 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMobileScreenButton, 
  faFireFlameCurved, 
  faLeaf, 
  faMicrochip,
  faLanguage,
  faPlane,
  faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {
  return (
    <section id="tech" className="section tech">
      <div className="container">
        <h2 className="section-title">Technologies</h2>
        <div className="tech-grid">
          <div className="tech-col">
            <h3>Languages</h3>
            <div className="chips">
              <span className="chip"><FontAwesomeIcon icon={faPython} /> Python</span>
              <span className="chip"><FontAwesomeIcon icon={faMobileScreenButton} /> Dart</span>
              <span className="chip"><FontAwesomeIcon icon={faJs} /> JavaScript</span>
              <span className="chip"><FontAwesomeIcon icon={faHtml5} /> HTML</span>
              <span className="chip"><FontAwesomeIcon icon={faCss3Alt} /> CSS</span>
            </div>
          </div>

          <div className="tech-col">
            <h3>Frameworks & Libraries</h3>
            <div className="chips">
              <span className="chip"><FontAwesomeIcon icon={faFireFlameCurved} /> Flask</span>
              <span className="chip"><FontAwesomeIcon icon={faLeaf} /> Django</span>
              <span className="chip"><FontAwesomeIcon icon={faFlutter} /> Flutter</span>
            </div>
          </div>

          <div className="tech-col">
            <h3>Tools & Platforms</h3>
            <div className="chips">
              <span className="chip"><FontAwesomeIcon icon={faFigma} /> Figma</span>
              <span className="chip"><FontAwesomeIcon icon={faGitAlt} /> Git</span>
              <span className="chip"><FontAwesomeIcon icon={faGithub} /> GitHub</span>
              <span className="chip"><FontAwesomeIcon icon={faMicrochip} /> Arduino Uno</span>
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="chips vertical">
            <span className="chip"><FontAwesomeIcon icon={faLanguage} /> French</span>
            <span className="chip"><FontAwesomeIcon icon={faLanguage} /> English</span>
            <span className="chip"><FontAwesomeIcon icon={faPlane} /> Passionate</span>
            <span className="chip"><FontAwesomeIcon icon={faPeopleGroup} /> Teamwork</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;