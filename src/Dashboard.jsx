import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Dashboard() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/food')
      .then(response => response.json())
      .then(data => {
  console.log('FOOD DATA:', data)
  setFoods(data)
})
      .catch(error => {
        console.error('Error loading food:', error)
      })
  }, [])
  const checkExpiry = (food) => {
    if (food.status === 'CLAIMED') {
      return 'CLAIMED'
    }

    const now = new Date()
    const expiry = new Date()

    const [hours, minutes, seconds] = food.expiry_time.split(':')

    expiry.setHours(hours, minutes, seconds)

    if (now > expiry) {
      return 'EXPIRED'
    }

    return 'AVAILABLE'
  }
    const total = foods.length
  const claimed = foods.filter(food => checkExpiry(food) === 'CLAIMED').length
  const available = foods.filter(food => checkExpiry(food) === 'AVAILABLE').length
  const expired = foods.filter(food => checkExpiry(food) === 'EXPIRED').length
  return (
    <>
      <nav>
        <h2>🍃 Campus Food Connect</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/food">Find Food</Link>
          <Link to="/post-food">Post Food</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <section className="food-header">
        <span className="hero-badge">
          📊 YOUR IMPACT
        </span>

        <h1>Dashboard</h1>

        <p>
          Track food shared and help reduce food waste on campus.
        </p>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-cards">

          <div className="dashboard-card">
            <div className="dashboard-icon">📦</div>
            <h3>Total Posts</h3>
           <h2 id="total-posts">{total}</h2>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🤝</div>
            <h3>Claimed Food</h3>
            <h2 id="claimed-food">{claimed}</h2>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">🍃</div>
            <h3>Available Food</h3>
            <h2 id="available-food">{available}</h2>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">⏰</div>
            <h3>Expired Food</h3>
            <h2 id="expired-food">{expired}</h2>
          </div>

        </div>

        <div className="recent-posts">
          <h2>Recent Food Posts 🍱</h2>

          <div id="recent-posts-container">
            <p>No posts available.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          © 2026 Campus Food Connect |
          Share Food, Spread Kindness 🌱
        </p>
      </footer>
    </>
  )
}

export default Dashboard