 import { Link } from 'react-router-dom' 

function CineTrack() {
  return (
    <main className="case-study">
    <Link to="/" className="back-link">← Back to Work</Link>
      <section className="case-hero">
        <h1>CineTrack</h1>
        <p>A movie watchlist app built with React and the TMDB API, featuring genre tags, star ratings, and a persistent watchlist.</p>
        <div className="tags">
          <span>React</span>
          <span>TMDB API</span>
          <span>LocalStorage</span>
          <span>Responsive</span>
        </div>
        <a href="https://my-watchlist-xi.vercel.app" target="_blank" rel="noreferrer" className="live-link">
          View Live Site →
        </a>
      </section>

      <section className="case-section">
        <h2>Overview</h2>
        <p>CineTrack is a movie watchlist app that lets users discover popular movies using the TMDB API, add them to a personal watchlist, and rate them with a star rating system. Built to demonstrate API integration and responsive design in React.</p>
      </section>

      <section className="case-section">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>Live movie data from TMDB API</li>
          <li>Add and remove movies from watchlist</li>
          <li>Star rating system for each movie</li>
          <li>Genre tags for easy browsing</li>
          <li>Fully responsive mobile design</li>
          <li>Watchlist persistence using localStorage</li>
        </ul>
      </section>
    </main>
  )
}

export default CineTrack