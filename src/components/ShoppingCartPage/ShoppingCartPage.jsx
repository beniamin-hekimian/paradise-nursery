import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import './ShoppingCartPage.css';
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../features/cartSlice.js";

export default function ShoppingCartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartAmount = useSelector((state) => state.cart.totalCartAmount);
  const dispatch = useDispatch();

  function handleDecreaseQuantity(item){
    dispatch(decreaseQuantity(item))
  }

  function handleIncreaseQuantity(item){
    dispatch(increaseQuantity(item))
  }

  function handleRemoveFromCart(item){
    dispatch(removeFromCart(item));
  }

  return (
    <>
      <Navbar />
      <main className="cart">
        <div className="row">
          <h2>Total Cart Amount: ${totalCartAmount}</h2>
          <section className="cart-container">
          {cartItems.map((item) =>(
            <article key={item.id} className="cart-item">
              <img src={item.image} alt={`${item.name} plant image`} loading="lazy" />
              <main>
                <h3>{item.name}</h3>
                <p>{`$${item.price}`}</p>
                <div className="controls">
                  <button onClick={() => handleDecreaseQuantity(item)} className="btn">-</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => handleIncreaseQuantity(item)} className="btn">+</button>
                </div>
                <h4>{`Total: $${item.totalPrice}`}</h4>
                <button onClick={() => handleRemoveFromCart(item)} className="btn">Delete</button>
              </main>
            </article>
          ))}
          </section>
          <Link to="/plants" className="btn">Continue Shopping</Link>
          <button className="btn" title="Coming Soon" disabled>Checkout</button>
        </div>
      </main>
    </>
  )
}