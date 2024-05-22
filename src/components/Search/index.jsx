import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./index.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "flowers"));
        const results = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({ id: doc.id, ...data });
          }
        });
        setSearchResults(results);
      } catch (error) {
        console.error("Axtaris xetası:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    if (searchResults.length > 0) {
      window.location.href = `/product-page/${searchResults[0].id}`;
    }
  };

  return (
    <div className="search">
      <div className="container">
        <div className="page-info-nav">
          <Link to={"/"}>
            <h4>{"home"} /</h4>
          </Link>
          <span>&nbsp; {"search"}</span>
        </div>
      </div>
      <div className="search-area">
        <h2 className="header-com">Search</h2>
        <div>
          <input
            placeholder="Search our store"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <p onClick={handleSearch}>
            <CiSearch />
          </p>
        </div>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link
                  className="recommended-product"
                  to={`/product-page/${result.id}`}
                >
                  {result.imgs.length > 0 && (
                    <img className="rec-img" src={result.imgs[0].url} alt={result.name} />
                  )}
                  <p className="rec-text">{result.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
