import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav>
        <h2>🍃 Campus Food Connect</h2>

       <div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/food">Find Food</Link>
  <Link to="/post-food">Post Food</Link>
  <Link to="/login">Login</Link>
</div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <span className="hero-badge">
            🌱 Building a Sustainable Campus
          </span>

          <h1>
            Share Food.<br />
            <span>Spread Kindness.</span>
          </h1>

          <p>
            Connect surplus food from your campus
            with students, volunteers and people in need.
            Together, let's reduce food waste.
          </p>

          <div className="hero-buttons">

           <Link to="/food">
  <button>🍱 Find Food</button>
</Link>

           <Link to="/post-food">
  <button className="secondary-btn">
    ＋ Post Food
  </button>
</Link>

          </div>

        </div>

        <div className="hero-visual">
          <div className="food-illustration">🥗</div>
          <h3>Food connects us</h3>
          <p>Small actions. Meaningful impact.</p>
        </div>

      </section>

      {/* Features Section */}
      <section className="features-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>

          <h2>Make a Difference Together</h2>

          <p>
            Three simple ways to help reduce food waste on campus.
          </p>
        </div>

        <div className="features">

          <div className="card">
            <div className="card-icon">🍱</div>

            <h3>Share Surplus Food</h3>

            <p>
              Post extra food from your college
              canteen or campus events.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🤝</div>

            <h3>Connect With Others</h3>

            <p>
              Help students, volunteers and
              organizations find available food.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">♻️</div>

            <h3>Reduce Food Waste</h3>

            <p>
              Work together to create a cleaner
              and more sustainable campus.
            </p>
          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="cta-section">

        <h2>Every Meal Matters 🌍</h2>

        <p>
          Be part of the movement to reduce food waste.
        </p>

       <Link to="/post-food">
  <button>Start Sharing Food</button>
</Link>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Campus Food Connect | Made for a better campus 🌱
        </p>
      </footer>
    </>
  )
}
export default Home