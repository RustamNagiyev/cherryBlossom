//Bucket.js
import React, { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./index.css";
import { getUserCart, removeProductFromCart } from "../../UserService";
import { useDispatch, useSelector } from "react-redux"; 
import { Link, NavLink } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  decrementCounter,
  incrementCounter,
  setCartItems,
  setTotalPrice,
} from "../../cardSlice";

const Bucket = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Redux store'dan istifadəçi girişi
  const userId = useSelector((state) => state.auth.userId); // Redux store'dan istifadəçi id-si
  const dispatch = useDispatch(); // Redux actionları istifade etmək üçün
  const cartItems = useSelector(({ cart: { cartItems } }) => cartItems);
  const totalPrice = useSelector(({ cart: { totalPrice } }) => totalPrice);

  // Bucket.js
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (isLoggedIn && userId) {
          const userCart = await getUserCart();
          dispatch(setCartItems([]));
          dispatch(setCartItems(userCart));
        } else {
            console.error(
            "User don't login or catching userID error."
          );
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
      }
    };

    fetchCartItems();
  }, [isLoggedIn, userId, dispatch]);

  useEffect(() => {
    dispatch(setTotalPrice());
  }, [cartItems, dispatch]);

  const handleRemoveFromCart = async (productId) => {
    try {
      const newData = cartItems.filter(({ id }) => id !== productId);
      dispatch(setCartItems(newData));
      await removeProductFromCart(userId, productId, cartItems, setCartItems);
    } catch (error) {
      console.error("Product delete error:", error);
    }
  };

  return (
    <div className="bucket-page">
      <div className="container">
        <div className="header-container">
          <div className="left">
            <div className="page-info-nav">
              <Link to={"/"}>
                <h4>{"home"} /</h4>
              </Link>
              <span>&nbsp; {"Bucket page"}</span>
            </div>
          </div>
          <NavLink to="/catalog" className="right">
            <p>Continue shopping</p>
          </NavLink>
        </div>

        <div className="section-container">
          <div className="left">
            <p>Product</p>
          </div>
          <div className="right">
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        {cartItems.length >= 1
          ? cartItems?.map((item, index) => (
              <div key={index}>
                <div className="main-container">
                  <div className="left">
                    <div>
                      <img src={item.imgs[0].url} alt={item.name} />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>${item.price}.00</p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="minus-plus-area">
                      <button
                        className="minus-plus-btn"
                        onClick={() => dispatch(decrementCounter(item.id))}
                      >
                        <FaMinus />
                      </button>
                      <p className="number"> {item.quantity} </p>
                      <button
                        className="minus-plus-btn"
                        onClick={() => dispatch(incrementCounter(item.id))}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div className="bin-area">
                      <button
                        className="bin"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <RiDeleteBinLine />
                      </button>{" "}
                    </div>
                    <div className="total-area">
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Xahiş edirik daxil olun"}
      </div>
      <hr />
      <div className="container">
        <div className="send-area-top">
          <p className="send-text">Special instructions for seller</p>
          <input
            className="send-input"
            type="text"
            placeholder="Add your instructions for seller here"
          />
        </div>
        <div className="send-area-bottom">
          <div className="left">
            <p className="send-text">Gift message</p>
            <input
              className="send-input"
              type="text"
              placeholder="Add your gift message here"
            />
          </div>
          <div className="right">
            <div className="subtotal-area">
              <p>Subtotal</p>
              <p>${totalPrice}.00</p>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button className="check-btn">Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
