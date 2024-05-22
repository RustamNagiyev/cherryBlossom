import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ data: { id, title, description } }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [active, setActive] = useState(false);
  const divRef = useRef();

  const accOpenHandler = (accId) => {
    setActiveIndex(accId);
    setActive((prev) => !prev);
    console.log(divRef.current.id);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles["accordion-head"]}>
        <button onClick={() => accOpenHandler(id)}>{title}</button>

        <button>
          <MdKeyboardArrowDown />
        </button>
      </div>

      <div
        id={id}
        ref={divRef}
        className={`${styles["accordion-body"]} ${
          active && activeIndex == divRef.current?.id
            ? styles["acc-open"]
            : styles["acc-close"]
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
