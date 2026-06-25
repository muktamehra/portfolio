 import { Link } from 'react-router-dom' 

function InsightBoard() {
  return (
    <main className="case-study">
     <Link to="/" className="back-link">← Back to Work</Link>   
      <section className="case-hero">
        <h1>InsightBoard</h1>
        <p>An analytics dashboard built with React and Recharts, featuring dynamic data visualization, dark mode, and persistent user preferences.</p>
        <div className="tags">
          <span>React</span>
          <span>Recharts</span>
          <span>Dark Mode</span>
          <span>LocalStorage</span>
        </div>
        <a href="https://insightboard-seven.vercel.app" target="_blank" rel="noreferrer" className="live-link">
          View Live Site →
        </a>
      </section>

      <section className="case-section">
        <h2>Overview</h2>
        <p>InsightBoard is an analytics dashboard that displays sales data, user statistics, and order information through interactive charts and data tables. Built to demonstrate data visualization skills and component-based architecture in React.</p>
      </section>

      <section className="case-section">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>Line and bar charts using Recharts library</li>
          <li>Dark mode with localStorage persistence</li>
          <li>Sidebar navigation with multiple pages</li>
          <li>Stat cards showing key metrics</li>
          <li>Searchable data tables</li>
        </ul>
      </section>
    </main>
  )
}

export default InsightBoard