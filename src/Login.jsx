import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const result = await response.text()

      if (result === 'Login successful') {
        alert('✅ Login successful!')
      } else {
        alert('❌ Invalid email or password')
      }
    } catch (error) {
      alert('❌ Cannot connect to server.')
      console.error(error)
    }
  }
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

      <section className="form-header">
        <span className="hero-badge">
          🌱 WELCOME BACK
        </span>

        <h1>🔐 Login</h1>

        <p>
          Login to continue sharing and discovering food.
        </p>
      </section>

      <section className="food-form">
        <div className="form-title">
          <h2>Login to Your Account</h2>
          <p>Enter your email and password.</p>
        </div>

        <form>
          <label htmlFor="email">Email</label>
          <input
  type="email"
  id="email"
  placeholder="Example: imaad@gmail.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
          <label htmlFor="password">Password</label>
          <input
  type="password"
  id="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

         <button type="button" onClick={loginUser}>
  🔐 Login
</button>
          <p>
            Don't have an account?{' '}
            <Link to="/register">Create an account</Link>
          </p>
        </form>
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

export default Login