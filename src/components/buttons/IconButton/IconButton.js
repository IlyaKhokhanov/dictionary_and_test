import React from "react";
import "./IconButton.scss";

export function IconButton(props) {
  const { handler, image, descriptionImg, ...prop } = props;
  return (
    <button
      className='icon-button'
      onClick={handler}
      disabled={prop.disabledBtn ? prop.disabledBtn : false}>
      <img
        src={image}
        alt={descriptionImg}
        name={prop.spokenWord ? prop.spokenWord : ""}
      />
    </button>
  );
}
