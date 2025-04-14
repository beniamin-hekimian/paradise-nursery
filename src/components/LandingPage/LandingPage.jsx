import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main className="home">
      <section className="row">
        <article className="left-column">
          <h1>Welcome To Paradise Nursery</h1>
          <hr />
          <p>Where Green Meets Serenity</p>
          <Link to="/plants" className="btn">Get Started</Link>
        </article>
        <article className="right-column">
          <h2>Welcome to Paradise Nursery, where green meets serenity!</h2>
          <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromabc fragrant ones, we have something for every plant enthusiast.</p>
          <p>Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green joumey, we're here to support you every step of the way. Feel free to explore our collection, ask questions. and let us help you find the perfect plant for your home or offce.</p>
          <p>Join us in our mission to create a greener, healthier world. Vtsit Paradise Nursery today and experience the beauty of nature right at your doorstep.</p>
        </article>
      </section>
    </main>
  )
}