import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt={""}
          src={imageURL}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            left: box.leftCol,
            right: box.rightCol,
            top: box.topRow,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
