import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

const AccordionItem = ({ title, children, isOpen = false }: AccordionItemProps) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className={`accordion-item ${open ? 'open' : ''}`}>
      <button className="accordion-toggle" onClick={() => setOpen(!open)}>
        {title} <span className="chev">▾</span>
      </button>
      <div className="accordion-body">
        {children}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="accordion">
          <AccordionItem title="Who am I ?" isOpen={true}>
            <p>
              I'm <strong>Kodjo Andre</strong>, a passionate <strong>Software Engineering student </strong> 
              who loves exploring how science and technology can change the world.  
              I'm deeply curious about innovation, systems, and everything that pushes human knowledge forward.
            </p>
          </AccordionItem>

          <AccordionItem title="What I love">
            <p>
              I have a strong interest in <strong>aeronautics</strong>, fascinated by how technology 
              allows humans to conquer the skies.  
              I'm also inspired by <strong>Artificial Intelligence</strong> — from automation to human–machine interaction — 
              and how it can make systems smarter and more efficient.
            </p>
          </AccordionItem>

          <AccordionItem title="What I do">
            <p>
              I design and build <strong>modern, responsive web applications</strong> with a focus on 
              user experience and performance. I love learning new technologies and finding elegant solutions 
              to complex problems.
            </p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default About;