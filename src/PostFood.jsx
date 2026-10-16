import { Link } from 'react-router-dom'
import { useState } from 'react'

function PostFood() {
  const [formData, setFormData] = useState({
    food_name: '',
    category: '',
    quantity: '',
    location: '',
    expiry_time: '',
    description: '',
    contact: ''
  })
    const postFood = async () => {
    const food = {
      food_name: formData.food_name,
      category: formData.category,
      quantity: parseInt(formData.quantity),
      location: formData.location,
      expiry_time: formData.expiry_time + ':00',
      description: formData.description,
      contact: formData.contact,
      status: 'AVAILABLE',
      provider_id: 1
    }

    try {
      const response = await fetch('http://localhost:8080/api/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(food)
      })

      if (response.ok) {
        alert('🍃 Food posted successfully!')

        setFormData({
          food_name: '',
          category: '',
          quantity: '',
          location: '',
          expiry_time: '',
          description: '',
          contact: ''
        })
      } else {
        alert('❌ Failed to post food.')
      }
    } catch (error) {
      alert('❌ Cannot connect to server.')
      console.error(error)
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav>

        <h2>🍃 Campus Food Connect</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/food">Find Food</Link>
          <Link to="/post-food">Post Food</Link>
          <Link to="/login">Login</Link>
        </div>

      </nav>


      {/* Page Header */}
      <section className="form-header">

        <span className="hero-badge">
          🌱 SHARE WITH YOUR COMMUNITY
        </span>

        <h1>🍱 Post Surplus Food</h1>

        <p>
          Have extra food? Share it with someone who needs it.
          Every contribution makes a difference.
        </p>

      </section>


      {/* Food Form */}
      <section className="food-form">

        <div className="form-title">

          <h2>Food Information</h2>

          <p>
            Enter the details of the food you want to share.
          </p>

        </div>


        <form>

          <label htmlFor="food_name">
            Food Name
          </label>

         <input
  type="text"
  id="food_name"
  placeholder="Example: Veg Biryani"
  value={formData.food_name}
  onChange={(e) =>
    setFormData({ ...formData, food_name: e.target.value })
  }
/>

          <label htmlFor="category">
            Food Category
          </label>

          <select
  id="category"
  value={formData.category}
  onChange={(e) =>
    setFormData({ ...formData, category: e.target.value })
  }
>

            <option>Select Category</option>
            <option>Cooked Food</option>
            <option>Snacks</option>
            <option>Fruits</option>
            <option>Bakery</option>
            <option>Packaged Food</option>
            <option>Other</option>

          </select>


          <label htmlFor="quantity">
            Quantity
          </label>

         <input
  type="number"
  id="quantity"
  placeholder="Example: 30"
  value={formData.quantity}
  onChange={(e) =>
    setFormData({ ...formData, quantity: e.target.value })
  }
/>


          <label htmlFor="location">
            Pickup Location
          </label>

         <input
  type="text"
  id="location"
  placeholder="Example: College Canteen"
  value={formData.location}
  onChange={(e) =>
    setFormData({ ...formData, location: e.target.value })
  }
/>


          <label htmlFor="expiry_time">
            Available Until
          </label>

          <input
  type="time"
  id="expiry_time"
  value={formData.expiry_time}
  onChange={(e) =>
    setFormData({ ...formData, expiry_time: e.target.value })
  }
/>

          <label htmlFor="description">
            Description
          </label>

         <textarea
  id="description"
  placeholder="Describe the food..."
  value={formData.description}
  onChange={(e) =>
    setFormData({ ...formData, description: e.target.value })
  }
></textarea>

          <label htmlFor="contact">
            Contact Number
          </label>

          <input
  type="tel"
  id="contact"
  placeholder="Example: 9876543210"
  value={formData.contact}
  onChange={(e) =>
    setFormData({ ...formData, contact: e.target.value })
  }
/>

         <button type="button" onClick={postFood}>
  🍱 Post Food
</button>

        </form>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Campus Food Connect |
          Share Food, Spread Kindness 🌱
        </p>

      </footer>

    </>
  )
}

export default PostFood