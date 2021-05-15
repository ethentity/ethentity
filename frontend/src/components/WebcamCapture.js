import React from "react";
import Webcam from "react-webcam";
import { Button, func } from "shards-react";
import Canvas from "./Canvas";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const [imgSrc, setImgSrc] = React.useState(null);
  let item;
  let action_button;
  let confirmClicked = false;

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const reset = React.useCallback(() => {
    const imageSrc = "";
    setImgSrc(imageSrc);
  }, [setImgSrc]);


  if (imgSrc) {

    action_button = (
      <Button
        squared
        theme="success"
        onClick={() => {
          confirmClicked = true;

        }}
      >
        Confirm chunk #1
      </Button>
    );
    item = (
      <center>
        <Canvas
        img={imgSrc}
        save={confirmClicked}
        />


      </center>
    );
  } else {
    action_button = (
      <Button theme="success" squared onClick={capture}>
        Take photo
      </Button>
    );
    item = (
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
    );
  }

  return (
    <div className="container">
      <div>{item}</div>
      <div>{action_button}</div>
      <div>
        <Button theme="success" squared onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default WebcamCapture;
