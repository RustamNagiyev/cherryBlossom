import React from "react";
import "./index.css";
import { accData } from "./FAQMockdata";
import AccordionMUİ from "../../AccordionMUİ";

export default function Qustions() {
  return (
    <div className="questions">
      <h2 className="header-text">Frequently Asking Questions</h2>
      <div className="questions-center">
        <AccordionMUİ data={accData} />
      </div>
    </div>
  );
}
