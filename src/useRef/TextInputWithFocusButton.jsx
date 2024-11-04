import React, { useRef } from "react";

export const TextInputWithFocusButton = (props) => {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // current는 마운트된 iput element를 가리킴
    inputElem.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};
