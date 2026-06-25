function FashionMania() {
  return (
    <main className="case-study">
      <section className="case-hero">
        <h1>Fashion Mania</h1>
        <p>A fully functional e-commerce UI built with React, featuring product browsing, search, and a persistent shopping cart.</p>
        <div className="tags">
          <span>React</span>
          <span>CSS</span>
          <span>LocalStorage</span>
          <span>Figma</span>
        </div>
        <a href="https://mini-fashion-store.vercel.app" target="_blank" rel="noreferrer" className="live-link">
          View Live Site →
        </a>
      </section>

      <section className="case-section">
        <h2>Overview</h2>
        <p>Fashion Mania is a mini e-commerce store built to demonstrate React fundamentals including component architecture, state management, and localStorage persistence. It features 15 products across 5 categories with a fully working cart system.</p>
      </section>

      <section className="case-section">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>Product search with real-time filtering</li>
          <li>Add to cart with animated feedback</li>
          <li>Cart persistence using localStorage</li>
          <li>Remove items and clear cart functionality</li>
          <li>Category filtering across 5 product types</li>
        </ul>
      </section>

      <section className="case-section">
        <h2>Design Mockup</h2>
        <p>Designed a desktop and mobile mockup in Figma including a product grid, hero section, filter tabs, and responsive mobile layout.</p>
        <div className="figma-embed">
          <iframe
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/HJSxRaXphWhZsxSCf6SvaA/Fashion-Mania?node-id=0-1"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  )
}

export default FashionMania