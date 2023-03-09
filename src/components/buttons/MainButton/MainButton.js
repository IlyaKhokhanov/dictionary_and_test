import React from "react";
import { Link } from "react-router-dom";
import "./MainButton.scss";

export function MainButton(props) {
  const { buttonClass, to, children } = props;

  return (
    <Link className={`btn ${buttonClass}`} to={to ?? "/"}>
      {children}
    </Link>
  );
}
