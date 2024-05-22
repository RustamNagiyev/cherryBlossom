import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Address from "../Home/Address";
import Subscribe from "../Home/Subscribe";
import VideoArea from "./VideoArea";
import Write from "./Write";

export default function Contacts() {
  
  return (
    <div className="contacts">
      <div className="container">
        <div className="page-info-nav">
          <Link to={"/"}>
            <h4>{"home"} /</h4>
          </Link>
          <span>&nbsp; {"contacts"}</span>
        </div>
      </div>
      <h2 className="header-com">CONTACTS</h2>
      <Address />
      <VideoArea />
      <Write />
      <Subscribe />
     
    </div>
  );
}
