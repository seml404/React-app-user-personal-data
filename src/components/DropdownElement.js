import React, { useState } from "react";
import "./dropdownelement.css";

export default function DropDownElement(props) {
  let { selectDetails } = props;

  let [selectIsOpen, setSelectIsOpen] = useState(false);
  let [choosenValue, setChoosenValue] = useState("");

  function handleOpenSelect() {
    let value = selectIsOpen;
    setSelectIsOpen(!value);
  }

  function handleChooseItem(value) {
    setChoosenValue(value);
    handleOpenSelect();
  }

  return (
    <div className="select-section">
      {/* <p className="input-name">{selectDetails.title}</p> */}
      <div className="select">
        <div className="select-top" onClick={() => handleOpenSelect()}>
          <p className={choosenValue ? "select-choosen" : "select-default"}>
            {choosenValue ? choosenValue : selectDetails.default}
          </p>
          <img
            className={selectIsOpen ? "img-open" : "img-close"}
            alt="select-icon"
          ></img>
        </div>
        {selectIsOpen && (
          <div className="sub-select">
            {selectDetails.options.map((item) => {
              return (
                <div
                  key={item}
                  className="select-item"
                  onClick={() => handleChooseItem(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
