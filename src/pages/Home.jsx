import { Link } from 'react-router-dom'
import fashionMania from '../assets/fashion-mania.png'
import insightboard from '../assets/insightboard.png'
import cinetrack from '../assets/cinetrack.png'

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Hi, I'm Mukta Mehra</h1>
        <p>UI Developer & React Developer based in Fairfax, VA</p>
        <p>I build clean, responsive interfaces with React and an eye for design.</p>
      </section>

      <section className="projects">
        <h2>Selected Work</h2>
        <div className="project-grid">
  <Link to="/projects/fashion-mania" className="project-card">
  <div className="project-image">
    <img src={fashionMania} alt="Fashion Mania" />
  </div>
  <h3>Fashion Mania</h3>
  <p>E-commerce UI with React, cart functionality, and Figma mockup</p>
  <div className="tags">
    <span>React</span>
    <span>CSS</span>
    <span>LocalStorage</span>
    <span>Figma</span>
  </div>
</Link>

<Link to="/projects/insightboard" className="project-card">
  <div className="project-image">
    <img src={insightboard} alt="InsightBoard" />
  </div>
  <h3>InsightBoard</h3>
  <p>Analytics dashboard with Recharts, dark mode, and dynamic data</p>
  <div className="tags">
    <span>React</span>
    <span>Recharts</span>
    <span>Dark Mode</span>
    <span>LocalStorage</span>
  </div>
</Link>

<Link to="/projects/cinetrack" className="project-card">
  <div className="project-image">
    <img src={cinetrack} alt="CineTrack" />
  </div>
  <h3>CineTrack</h3>
  <p>Movie watchlist app with TMDB API, genre tags, and star ratings</p>
  <div className="tags">
    <span>React</span>
    <span>TMDB API</span>
    <span>LocalStorage</span>
    <span>Responsive</span>
  </div>
</Link>
        </div>
      </section>
    </main>
  )
}

export default Home