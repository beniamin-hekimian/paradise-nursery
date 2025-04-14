import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice.js";
import './ProductListingPage.css';

export default function ProductListingPage() {
  const [plants, setPlants] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    axios.get('/plants.json')
      .then(response => {
        setPlants(response.data.plants);
      })
      .catch(error => {
        console.error('Error fetching plant data:', error);
      });
  }, []);

  const airPurifying = plants.filter(plant => plant.type === "air purifying");
  const aromatic = plants.filter(plant => plant.type === "aromatic fragrant");

  function handleAddToCart(plant){
    dispatch(addToCart(plant));
    console.log(plant);
  }

  return (
    <>
      <Navbar />
      <main className="plants">
        <div className="row">
          <h2>Air Purifying Plants</h2>
          <section className="card-grid">
          {airPurifying.map((plant) => (
            <article key={plant.id} className="plant-card">
              <h3>{plant.name}</h3>
              <img src={plant.image} alt={`${plant.name} plant image`} loading="lazy" />
              <strong>{`$${plant.price}`}</strong>
              <p>{plant.description}</p>
              <button
                onClick={() => handleAddToCart(plant)}
                className="btn"
                disabled={cartItems.some(item => item.id === plant.id)}
              >
                {cartItems.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
              </button>
              <small>SALE</small>
            </article>
          ))}
          </section>
          <h2>Aromatic Fragrant Plants</h2>
          <section className="card-grid">
          {aromatic.map((plant) => (
            <article key={plant.id} className="plant-card">
              <h3>{plant.name}</h3>
              <img src={plant.image} alt={`${plant.name} plant image`} loading="lazy" />
              <strong>{`$${plant.price}`}</strong>
              <p>{plant.description}</p>
              <button
                onClick={() => handleAddToCart(plant)}
                className="btn"
                disabled={cartItems.some(item => item.id === plant.id)}
              >
                {cartItems.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
              </button>
              <small>SALE</small>
            </article>
          ))}
          </section>
        </div>
      </main>
    </>
  )
}