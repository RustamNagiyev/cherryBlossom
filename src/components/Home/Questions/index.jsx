import React from "react";
import "./index.css";
// import Accordion from "../../Accordion";
import { accData } from "./FAQMockdata";
import AccordionMUİ from "../../AccordionMUİ";

export default function Qustions() {
  return (
    <div className="questions">
      <h2 className="header-text">Frequently Asking Questions</h2>
      <div className="questions-center">
        {/* {accData.map((d) => (
          <Accordion key={d.id} data={d} />
        ))} */}
        {/* {accData.map((ques) => ( */}
        <AccordionMUİ data={accData} />
        {/* ))} */}

        {/* <div className="ques">
          <button onClick={lookAnswer}>
            Can I order same day flower delivery?
          </button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques">
          <button onClick={lookAnswer}>Do you deliver on Sundays?</button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques">
          <button onClick={lookAnswer}>
            How much does flower delivery service cost?
          </button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques">
          <button onClick={lookAnswer}>
            How long does it take to deliver flowers?
          </button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques">
          <button onClick={lookAnswer}>
            Can I pick up flowers from the shop?
          </button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques">
          <button onClick={lookAnswer}>
            Can I order flower delivery for tomorrow?
          </button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques">
          <button onClick={lookAnswer}>Where do you deliver flowers?</button>
          <button>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="ques" onClick={lookAnswer}>
          <button>Can I create my own bouquet?</button>
          <button>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`answer-area ${lookAnswer ? "answer-area-open" : " "}`}
          >
            dscsdv
          </div>
        </div> */}
      </div>
    </div>
  );
}
