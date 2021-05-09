import "../styles.css";
import React from "react";
import WebcamCapture from "../components/WebcamCapture";
import { Progress } from "shards-react";

const Verification = () => {
  return (
    <div className="container">
      <div>
        <WebcamCapture />
        <Progress theme="primary" striped value={1} max={5} />
      </div>
    </div>
  );
};

export default Verification;
