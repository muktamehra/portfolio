function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <h1>About Me</h1>
        <p>I'm a UI Developer with professional experience at Motorola, where I built and maintained user interfaces for enterprise applications. After a career break, I've been sharpening my React skills and expanding into UI/UX design with Figma.</p>
        <p>I enjoy the intersection of design and code — building things that look good and work well.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3>Tools & Design</h3>
            <ul>
              <li>Figma</li>
              <li>Git & GitHub</li>
              <li>Recharts</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Open to UI Developer and React Developer roles. Feel free to reach out!</p>
        <a href="mailto:your@email.com">2muktamehra@gmail.com</a>
      </section>
    </main>
  )
}

export default About