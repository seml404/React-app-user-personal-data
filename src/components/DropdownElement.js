import React, { useState } from "react";
import "./dropdownelement.css";
import arrow from "../assets/Vector.svg";

export default function DropDownElement(props) {
  let { selectDetails } = props;
  let [options, setOptions] = useState("");
  let [selectIsOpen, setSelectIsOpen] = useState(false);
  let [choosenValue, setChoosenValue] = useState("");
  let [filterValue, setFilterValue] = useState("");

  // function handleOpenSelect() {
  //   setSelectIsOpen(true);
  // }

  function handleChooseItem(value) {
    setChoosenValue(value);
    setSelectIsOpen(false);
    setFilterValue("");
  }

  function handleInputChange(e) {
    setChoosenValue(e.target.value);
    setFilterValue(e.target.value);
    if (filterValue) {
      console.log(filterValue, options);
      let res = selectDetails.options.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(res);
      setOptions(res);
    }
  }

  function handleInputClick() {
    setChoosenValue("");
    setFilterValue("");
    setOptions(selectDetails.options);
  }

  return (
    <div className="select-section">
      <div className="select">
        <div className="select-top">
          <input
            className={choosenValue ? "select-choosen" : "select-default"}
            value={choosenValue}
            onChange={(e) => handleInputChange(e)}
            onFocus={() => setSelectIsOpen(true)}
            onClick={() => handleInputClick()}
            // onBlur={() => setSelectIsOpen(true)}
          ></input>
          <img
            className={selectIsOpen ? "img-open" : "img-close"}
            src={arrow}
            alt="select-icon"
          ></img>
        </div>
        {selectIsOpen && (
          <div className="sub-select">
            {choosenValue
              ? options.map((item) => {
                  return (
                    <div
                      key={item}
                      className="select-item"
                      onClick={() => handleChooseItem(item)}
                    >
                      {item}
                    </div>
                  );
                })
              : selectDetails.options.map((item) => {
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
