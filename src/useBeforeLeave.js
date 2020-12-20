import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    // 마우스가 위로(탭을 닫으려고)갈 때 함수 실행
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };

  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const BeforeLeave = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);

  return (
    <div>
      <h1>Hello!!!</h1>
    </div>
  );
};

export default BeforeLeave;
