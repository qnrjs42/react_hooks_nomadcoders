import React, { useEffect, useRef, useState } from "react";

const useFullScreen = (callback) => {
  const element = useRef();

  const triggerFullScreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // eslint-disable-next-line no-unused-expressions
        element.current.mozRequestFullScreen;
      } else if (element.current.webkitRequestFullscreen) {
        // eslint-disable-next-line no-unused-expressions
        element.current.webkitRequestFullscreen;
      } else if (element.current.msRequestFullscreen) {
        // eslint-disable-next-line no-unused-expressions
        element.current.msRequestFullscreen;
      }
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFullScreen = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFullScreen, exitFullScreen };
};

const FullScreen = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFullScreen, exitFullScreen } = useFullScreen();

  return (
    <div>
      <h1>Hello!!!</h1>
      <div ref={element}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/191215_tvN_%EC%A6%90%EA%B1%B0%EC%9B%80%EC%A0%84_%ED%98%B8%ED%85%94%EB%8D%B8%EB%A3%A8%EB%82%98_%ED%86%A0%ED%81%AC%EC%84%B8%EC%85%98_%EC%95%84%EC%9D%B4%EC%9C%A0_%286%29.jpg"
          width="300px"
          height="450px"
        />
        <button onClick={exitFullScreen}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFullScreen}>Make fullscreen</button>
    </div>
  );
};

export default FullScreen;
