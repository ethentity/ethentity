import React from "react";
import Webcam from "react-webcam";
import { Button } from "shards-react";
import CanvasDraw from "react-canvas-draw";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef();
  const [imgSrc, setImgSrc] = React.useState(null);
  let item;
  let action_button;
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
          const saveData = canvasRef.current.getSaveData();
          console.log(saveData);
          localStorage.setItem(
            "savedDrawing",
            saveData
          )
        
         
        }}
      >
        Confirm chunk #1
      </Button>
    );
    item = (
      <center>
        <CanvasDraw
          ref={canvasRef}
          brushColor="#000000"
          canvasWidth="620px"
          canvasHeight="480px"
          imgSrc={imgSrc}
          lazyRadius={0}
          brushRadius={5}
          saveData={localStorage.getItem("savedDrawing")}
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
