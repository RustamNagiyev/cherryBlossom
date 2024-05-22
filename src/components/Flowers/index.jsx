import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 } from "uuid";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import "./index.css";
import { IoCloseCircleOutline } from "react-icons/io5";

const flowersRef = collection(db, "flowers");

export default function Flowers() {
  const [data, isLoading] = useCollectionData(flowersRef);

  const [flower, setFlower] = useState({
    name: "",
    imgs: [],
    price: 0,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFlower((prev) => ({ ...prev, [name]: value }));
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageRef = storageRef(
      storage,
      "flower_images/" + `${file.name + v4()}`
    );

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setFlower((prev) => ({
            ...prev,
            imgs: [...prev.imgs, { url, id: v4() }], // Add a unique id for each image
          }));
        });
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };

  const removeImageHandler = (id) => {
    setFlower((prev) => ({
      ...prev,
      imgs: prev.imgs.filter((img) => img.id !== id), // Remove the image with the given id
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (flower.name && flower.price && flower.imgs.length > 0) {
        setFlower({ name: "", imgs: [], price: 0 }); // Form reset
        const res = await addDoc(flowersRef, flower);
        console.log("Document written with ID: ", res.id);
      } else {
        alert("Please fill in all fields and upload at least one image.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flowers">
      <h2 className="header-com">Add new flowers</h2>
      <div className="center">
        <form className="send-area" onSubmit={formSubmitHandler}>
          <input
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Enter the name of the product"
            className="send"
            value={flower.name}
          />
          <input
            onChange={inputChangeHandler}
            name="price"
            type="number"
            placeholder="Enter the price of the product"
            className="send"
            value={flower.price}
          />
          <label htmlFor="file-upload" className="custom-file-upload">
            Custom Upload
          </label>
          <input
            onChange={fileChangeHandler}
            name="img"
            type="file"
            id="file-upload"
            multiple
          />
          {flower.imgs.length > 0 && (
            <div className="uploaded-images">
              <h3 className="header-upload">Uploaded Images:</h3>
              <div className="image-list">
                {flower.imgs.map((img, index) => (
                  <div key={index} className="image-item">
                    <img
                      className="upload-img"
                      src={img.url}
                      alt={`Img ${index + 1}`}
                    />
                    <button
                      onClick={() => removeImageHandler(img.id)}
                      className="remove-btn"
                    >
                      <IoCloseCircleOutline />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <input type="submit" className="send" />
        </form>
      </div>
    </div>
  );
}
