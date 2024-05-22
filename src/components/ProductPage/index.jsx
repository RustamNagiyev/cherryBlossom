//productpage.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "./index.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { addProductToCart, getUserCart } from "../../UserService";
import { setCartItems, setTotalPrice } from "../../cardSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const flowersRef = collection(db, "flowers");

const ProductPage = () => {
  const dispatch = useDispatch(); 
  const [data] = useCollectionData(flowersRef);
  const { pId } = useParams();

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [productQuantity, setProductQuantity] = useState(1);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    setLoading(false);
  }, [data]);




  const handleAddToCart = async () => {
    try {
      if (!isLoggedIn) {
        
        navigate("/login");
        toast("Please login to your account!", {
          icon: "🌷",
        });
        navigate("/login");
        return;
      }
      else{
        toast("The product has been added to the cart.", {
          icon: "🌷",
        });
      }


      await addProductToCart({ ...currentFlower, quantity: productQuantity });
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

  const currentFlower = data?.find((flower) => flower.id === pId);

  useEffect(() => {
    if (currentFlower) {
      setProductQuantity(currentFlower.quantity || 1);
    }
  }, [currentFlower]);

  const incrementCounter = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decrementCounter = () => {
    if (productQuantity !== 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  if (loading || !currentFlower) {
    return <p style={{ paddingTop: "150px" }}>Loading...</p>;
  }

  return (
    <div className="product-page">
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
      <div className="container">
        <div className="page-info-nav">
          <Link to={"/"}>
            <h4>{"home"} /</h4>
          </Link>
          <span>&nbsp; {"product page"}</span>
        </div>
        <div className="product-main">
          <div className="left">
            {currentFlower?.imgs && (
              <Swiper
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {currentFlower.imgs.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="product-image"
                      src={image.url}
                      alt="flower"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="right">
            <p className="product-name">{currentFlower?.name}</p>
            <p className="product-cost">${currentFlower?.price}.00</p>
            <p className="shipping-text">
              <span>Shipping</span> calculated at checkout
            </p>
            <div className="btn-area">
              <div className="left-btn-area">
                <p>Quantity</p>
                <div className="minus-plus-area">
                  <button className="minus-plus-btn" onClick={decrementCounter}>
                    <FaMinus />
                  </button>
                  <p className="number"> {productQuantity} </p>
                  <button className="minus-plus-btn" onClick={incrementCounter}>
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="right-btn-area">
                <button
                  onClick={handleAddToCart}
                  disabled={!localStorage.getItem("isLoggedIn")}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="end-text">
              Pickup available at <span>Hollywood blvd</span> Usually ready in
              tomorrow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
