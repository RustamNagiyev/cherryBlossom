// UserService.js

import { getAuth } from "firebase/auth";

import { db } from "./firebase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getCurrentUser = async () => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe(); 
        resolve(user); //istifadecini qaytar
      }, reject);
    });
};

export const setUserCart = (cartItems) => {
  localStorage.setItem("userCart", JSON.stringify(cartItems));
};




export const getUserCart = async () => {
  try {
    const user = await getCurrentUser();
    if (user) {
      const userId = user.uid;
      const userCartRef = doc(db, "buckets", userId);
      const userCartSnapshot = await getDoc(userCartRef);

      if (userCartSnapshot.exists()) {
        return userCartSnapshot.data().products;
      } else {
        await createUserCart();
        return [];
      }
    } else {
      throw new Error("Istifadeci hesaba daxil olmuyub");
    }
  } catch (error) {
    console.error("Error fetching user cart:", error);
    throw error;
  }
};

export const createUserCart = async () => {
  const user = await getCurrentUser();
  if (user) {
    const userId = user.uid;
    const userCartRef = doc(db, "buckets", userId);
    await setDoc(userCartRef, { products: [] });
  } else {
    throw new Error("Istifadeci hesaba daxil olmuyub");
  }
};

export const addProductToCart = async (product) => {
  try {
    const user = await getCurrentUser(); // await(getCurrentUser funksiyasini gozle)
    
    if (user) {
      const userId = user.uid;
      const userCartRef = doc(db, "buckets", userId);
      await updateDoc(userCartRef, {
        products: arrayUnion(product),
      });
      console.log("Mehsul sebete elave olundu");
    } else {
      throw new Error("Istifadeci hesabina daxil olmuyub");
    }
  } catch (error) {
    console.error("Mehsul sebete elave edilerken xeta bas verdi:", error);
    throw error;
  }
};

// delete all user data
export const clearUserCart = async () => {
  try {
    const user = getCurrentUser();
    if (user) {
      const userId = user.uid;
      const userCartRef = doc(db, "buckets", userId);
      await setDoc(userCartRef, { products: [] }); // Mehsullari temizle
      console.log("Sepet başarıyla temizlendi.");
    } else {
      throw new Error("Istifadeci hesaba daxil olmuyub");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//delete which user select product
export const removeProductFromCart = async (
  userId,
  productId,
  cartItems,
  setCartItems
) => {
  try {
    const userCartRef = doc(db, "buckets", userId);

    await updateDoc(userCartRef, {
      products: cartItems.filter(({ id }) => id !== productId),
    });
    // window.location.reload();
    setCartItems((pre) => pre.filter(({ id }) => id !== productId));

    console.log(`Mehsul (${productId}) sebetten silindi.`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};