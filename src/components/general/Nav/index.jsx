import React, { useEffect, useState } from "react";
import "./index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../authSlice";
import { IoClose } from "react-icons/io5";
import { setCartItems, setTotalPrice } from "../../../cardSlice";
import { getUserCart } from "../../../UserService";

import toast, { Toaster } from "react-hot-toast";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("isLoggedIn", false); // Oturumu kapatıldığında isLoggedIn değerini false olarak ayarla
    navigate("/");
    window.location.reload();
  };
  const openBucket = () => {
    if (!isLoggedIn) {
      toast("Xahiş edirik hesabınıza daxil olun!", {
        icon: "🌷",
      });
      navigate("/login");
    } else {
      navigate("/bucket-page");
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const userId = useSelector((state) => state.auth.userId); // Redux store'dan kullanıcı kimliğini al
  const totalPrice = useSelector(({ cart: { totalPrice } }) => totalPrice);

  // Bucket.js
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (isLoggedIn && userId) {
          const userCart = await getUserCart();
          dispatch(setCartItems(userCart));
          dispatch(setTotalPrice());
        } else {
          dispatch(setTotalPrice());
          dispatch(setCartItems([]));
          // Kullanıcı oturum açmamışsa veya kullanıcı kimliği yoksa, uygun bir işlem yapabilirsiniz
          console.error(
            "Kullanıcı oturum açmamış veya kullanıcı kimliği bulunamadı."
          );
          // Örneğin, kullanıcıyı oturum açma sayfasına yönlendirebilir veya uygun bir hata mesajı gösterebilirsiniz
        }
      } catch (error) {
        console.error("Error fetching user cart:", error);
        // Kullanıcı oturum açmamış hatası olduğunda uygun bir işlem yapılabilir
        // Örneğin, kullanıcıyı oturum açma sayfasına yönlendirebilir veya uygun bir hata mesajı gösterebilirsiniz
      }
    };

    fetchCartItems();
  }, [isLoggedIn, userId, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector('.menu');
      const burgerMenuElement = document.querySelector('.burger-menu');
      if (
        menuElement &&
        !menuElement.contains(event.target) &&
        !burgerMenuElement.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="nav-bar">
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

      <nav className="nav">
        <div className="container-nav">
          <div className="left">
            <button className="burger-menu" onClick={toggleMenu}>
              <img
                src={require("../../../images/menu-icon.svg").default}
                alt="menu-icon"
              />
            </button>
          </div>
          <div className="center">
            <NavLink to="/">
              <img
                src={require("../../../images/logo.svg").default}
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="right">
            <div className="sign">
              {!isLoggedIn ? (
                <>
                  <NavLink to="login">
                    <button className="login">Login</button>
                  </NavLink>
                  <NavLink to="register">
                    <button className="register">Register</button>
                  </NavLink>
                </>
              ) : (
                <button className="log-out" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
            <NavLink to="search">
              <button className="search">
                <img
                  src={require("../../../images/search-icon.svg").default}
                  alt="search-icon"
                />
              </button>
            </NavLink>

            <button className="bucket" onClick={openBucket}>
              <img
                src={require("../../../images/bucket-icon.svg").default}
                alt="bucket-icon"
              />

              <p className="bucket-cost">
                {isLoggedIn ? <>{totalPrice}$</> : <></>}
              </p>
            </button>

            <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
              <div className="right-btn">
                <button className="close-item" onClick={toggleMenu}>
                  <IoClose />
                </button>
              </div>
              <div className="menu-item">
                <NavLink to="search">
                  <p>Search</p>
                </NavLink>
                <NavLink to="/">
                  <p>Home</p>
                </NavLink>
                <NavLink to="about">
                  <p>About us</p>
                </NavLink>
                <NavLink to="catalog">
                  <p>Catalog</p>
                </NavLink>
                <NavLink to="ourcollections">
                  <p>Collections</p>
                </NavLink>
                <NavLink to="contacts">
                  <p>Contacts</p>
                </NavLink>
                {userId === "HeiUhqM3uEaPCkVcTsR8bckm1Nl1" ? (
                  <>
                    <NavLink to="flowers">
                      <p>Add new flowers</p>
                    </NavLink>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
