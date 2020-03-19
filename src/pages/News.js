import React, { Component } from "react";
import Srdicko from "../images/srdicko.jpg";

const News = () => {
  return (
    <>
      <div>
        <p className="video-fb-desc">
          Vyhrajme společně proti Korona viru
          <div />
        </p>
        <div>
          <img className="srdicko-img" src={Srdicko} alt="srdicko" />
        </div>
        <div>
          <iframe
            className="video-fb"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F112500186825893%2Fvideos%2F142507617126488%2F&width=500&show_text=true&height=390&appId"
            width="500"
            height="390"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default News;
