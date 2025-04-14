import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.svg";
import './Navbar.css';

export default function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="logo" />
        <small>
          <h1>Paradise Nursery</h1>
          <p><i>where Green Meets Serenity</i></p>
        </small>
      </Link>
      <Link to="/plants" className="plants-link">
        Plants
      </Link>
      <Link to="/cart" className="cart-link">
        <img src={cart} alt="cart" />
        <small>{totalQuantity}</small>
      </Link>
    </nav>
  )
}
