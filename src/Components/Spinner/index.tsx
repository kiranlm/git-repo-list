import React, { FC } from "react";
import "./index.scss";

const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
