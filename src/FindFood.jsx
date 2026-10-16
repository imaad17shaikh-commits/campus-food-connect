import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function FindFood() {
      const [foods, setFoods] = useState([])
const [searchText, setSearchText] = useState('')
const [selectedFood, setSelectedFood] = useState(null)
  useEffect(() => {
    fetch('http://localhost:8080/api/food')
      .then(response => response.json())
      .then(data => {
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
const claimFood = async (foodId) => {
  const claim = {
    food_id: foodId,
    volunteer_id: 1,
    claim_time: new Date().toISOString().slice(0, 19),
    status: 'CLAIMED'
  }
const deleteFood = async (foodId) => {
  const confirmDelete = window.confirm(
    'Are you sure you want to delete this food item?'
  )

  if (!confirmDelete) {
    return
  }

  try {
    const response = await fetch(
      `http://localhost:8080/api/food/${foodId}`,
      {
        method: 'DELETE'
      }
    )

    if (response.ok) {
      alert('🗑️ Food deleted successfully!')
      setFoods(foods.filter(food => food.food_id !== foodId))
    } else {
      alert('❌ Failed to delete food.')
    }
  } catch (error) {
    alert('❌ Cannot connect to server.')
    console.error(error)
  }
}
  try {
    const response = await fetch('http://localhost:8080/api/claims', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(claim)
    })

    if (response.ok) {
      alert('✅ Food claimed successfully!')
      window.location.reload()
    } else {
      alert('❌ Failed to claim food.')
    }
  } catch (error) {
    alert('❌ Cannot connect to server.')
    console.error(error)
  }
}  
const deleteFood = async (foodId) => {
  const confirmDelete = window.confirm(
    'Are you sure you want to delete this food item?'
  )

  if (!confirmDelete) {
    return
  }

  try {
    const response = await fetch(
      `http://localhost:8080/api/food/${foodId}`,
      {
        method: 'DELETE'
      }
    )

    if (response.ok) {
      alert('🗑️ Food deleted successfully!')
      setFoods(foods.filter(food => food.food_id !== foodId))
    } else {
      alert('❌ Failed to delete food.')
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
      <section className="food-header">

        <span className="hero-badge">
          🍱 FOOD DISCOVERY
        </span>

        <h1>Find Food Near You</h1>

        <p>
          Discover surplus food shared by your campus community.
          Help reduce waste, one meal at a time.
        </p>

      </section>


      {/* Search Section */}
      <section className="food-search-section">

        <h2>Available Food 🍃</h2>

        <p>
          Search for food available on campus.
        </p>

       <input
  type="text"
  id="search-food"
  placeholder="🔍 Search food..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>
      </section>


      {/* Food Cards */}
     <div id="food-container" className="food-container">

  {foods
  .filter((food) =>
    food.food_name.toLowerCase().includes(searchText.toLowerCase())
  )
  .map((food) => (
    <div className="food-card" key={food.food_id}>

      <h2>🍱 {food.food_name}</h2>

      <p>
        <strong>Category:</strong> {food.category}
      </p>

      <p>
        <strong>Quantity:</strong> {food.quantity}
      </p>

      <p>
        <strong>Location:</strong> {food.location}
      </p>

      <p>
        <strong>Available Until:</strong> {food.expiry_time}
      </p>

      <p>
        <strong>Description:</strong> {food.description}
      </p>

     <p className={`status-${checkExpiry(food).toLowerCase()}`}>
  ● {checkExpiry(food)}
</p>


{checkExpiry(food) === 'AVAILABLE' && (
  <button onClick={() => claimFood(food.food_id)}>
    🤝 Claim Food
  </button>
)}

{checkExpiry(food) === 'EXPIRED' && (
  <button disabled className="expired-button">
    ⏰ Expired
  </button>
)}
<button onClick={() => setSelectedFood(food)}>
  👁️ View Details
</button>
<button onClick={() => deleteFood(food.food_id)}>
  🗑️ Delete Food
</button>
    </div>
  ))}

</div>



     {/* Food Details Popup */}
{selectedFood && (
  <div className="food-modal">

    <div className="modal-content">

      <span
        className="close-btn"
        onClick={() => setSelectedFood(null)}
      >
        &times;
      </span>

      <h2>🍱 {selectedFood.food_name}</h2>

      <p>
        <strong>Category:</strong> {selectedFood.category}
      </p>

      <p>
        <strong>Quantity:</strong> {selectedFood.quantity}
      </p>

      <p>
        <strong>Location:</strong> {selectedFood.location}
      </p>

      <p>
        <strong>Available Until:</strong> {selectedFood.expiry_time}
      </p>

      <p>
        <strong>Description:</strong> {selectedFood.description}
      </p>

      <p>
        <strong>Contact:</strong> {selectedFood.contact}
      </p>

      <p>
        <strong>Status:</strong> {checkExpiry(selectedFood)}
      </p>

    </div>

  </div>
)}


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

export default FindFood