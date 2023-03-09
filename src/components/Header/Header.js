import React from "react";
import { MainButton } from "../buttons/MainButton";
import "./Header.scss";

export function Header(props) {
  const { buttonClass, children } = props;

  return (
    <header className='header'>
      <p className='header-title'>{children}</p>
      <MainButton buttonClass={buttonClass}>Back to select</MainButton>
    </header>
  );
}
