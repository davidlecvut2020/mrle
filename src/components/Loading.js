import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>čekejte....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
