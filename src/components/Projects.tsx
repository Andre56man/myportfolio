const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-chips">
          <a href="https://github.com/Andre56man/Djokoshop" target="_blank" rel="noopener noreferrer" className="chip">
            🛍️E-commerce — <span>Python + html + django</span>
          </a>
          <a href="https://github.com/Andre56man/Karma-blog-e-co" target="_blank" rel="noopener noreferrer" className="chip">
            🛍️E-commerce + blog — <span>Python + Django</span>
          </a>
          <div className="chip">
            🌐 Another project coming-soon ...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;