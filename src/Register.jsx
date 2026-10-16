import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  })
    const registerUser = async () => {
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const result = await response.text()

      if (response.ok) {
        alert('✅ Account created successfully!')

        setFormData({
          name: '',
          email: '',
          password: '',
          role: ''
        })
      } else {
        alert('❌ ' + result)
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
          🌱 JOIN OUR COMMUNITY
        </span>

        <h1>📝 Create Account</h1>

        <p>
          Join Campus Food Connect and help reduce food waste.
        </p>
      </section>

      <section className="food-form">
        <div className="form-title">
          <h2>Register</h2>
          <p>Create your account to get started.</p>
        </div>

        <form>
          <label htmlFor="name">Full Name</label>
         <input
  type="text"
  id="name"
  placeholder="Example: Imaad Shaikh"
  value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
/>
          <label htmlFor="email">Email</label>
         <input
  type="email"
  id="email"
  placeholder="Example: imaad@gmail.com"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
/>

          <label htmlFor="password">Password</label>
         <input
  type="password"
  id="password"
  placeholder="Create a password"
  value={formData.password}
  onChange={(e) =>
    setFormData({ ...formData, password: e.target.value })
  }
/>

          <label htmlFor="role">Account Type</label>
         <select
  id="role"
  value={formData.role}
  onChange={(e) =>
    setFormData({ ...formData, role: e.target.value })
  }
>
            <option value="">Select Account Type</option>
            <option value="provider">Food Provider</option>
            <option value="volunteer">Volunteer</option>
          </select>

          <button type="button" onClick={registerUser}>
  📝 Create Account
</button>
          <p>
            Already have an account?{' '}
            <Link to="/login">Login here</Link>
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

export default Register