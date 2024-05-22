import React, { useState } from "react";
import "./index.css";
import { db } from "../../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import { useDispatch, useSelector } from "react-redux"; // Added imports from react-redux
import toast, { Toaster } from "react-hot-toast"; // Added toast import
import { addProductToCart, getUserCart } from "../../../UserService";
import { setCartItems, setTotalPrice } from "../../../cardSlice";

const flowersRef = collection(db, "flowers");

export default function TopRated({ cardCount, header }) {
  const [visibleCount, setVisibleCount] = useState(cardCount);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const q = category
    ? query(flowersRef, where("category", "==", category))
    : flowersRef;
  const [data] = useCollectionData(q);
  const dispatch = useDispatch(); // Redux dispatch hook
  const navigate = useNavigate(); // React Router navigate hook
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Select logged in status

  const handleShowMore = () => {
    if (visibleCount === data.length) {
      setVisibleCount(cardCount);
    } else {
      setVisibleCount((prevCount) => prevCount + 3);
    }
  };

  const handleAddToCart = async (flower) => {
    try {
      if (!isLoggedIn) {
        navigate("/login");
        toast("Please login to your account!", {
          icon: "🌷",
        });
        return;
      } else {
        toast("The product has been added to the cart.", {
          icon: "🌷",
        });
      }

      await addProductToCart({ ...flower, quantity: 1 });
      const fetchCartItems = async () => {
        try {
          const userCart = await getUserCart();
          dispatch(setCartItems([]));
          dispatch(setCartItems(userCart));
          dispatch(setTotalPrice());
        } catch (error) {
          console.error("Error fetching user cart:", error);
        }
      };

      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="top-rated">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#FFD1D7",
            color: "#665F5F",
            width: "100%",
            height: "4rem",
            margin: "0 1rem",
          },
        }}
      />
      <h2 className="header-com">{header}</h2>
      <div className="card-container">
        <div className="card-center">
          {data?.slice(0, visibleCount).map((flower) => (
            <Link className="card-link" to={`/product-page/${flower.id}`} key={flower.id}>
              {" "}
              {/* Hər carda bir link' */}
              <div className="card" key={flower.id}>
                {flower.imgs.length > 0 && (
                  <img
                    className="card-img"
                    src={flower.imgs[0].url}
                    alt={flower.name}
                  />
                )}

                <div className="bottom-card">
                  <div className="left">
                    <p className="product-name">{flower.name}</p>
                    <p className="product-cost">${flower.price}.00</p>
                  </div>
                  <div className="right">
                    <button
                      className="add-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(flower);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {data && (
        <button className="show-more" onClick={handleShowMore}>
          {visibleCount === data.length ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
