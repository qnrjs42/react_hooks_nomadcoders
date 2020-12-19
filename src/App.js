import React, { useEffect, useRef, useState } from "react";
import { useClick } from "./useClick";



const App = () => {
  const onClick = () => {
    console.log('hello');
  }
 const title = useClick(onClick);

  return (
    <div>
      <h1>Hello!!!</h1>
      <h2 ref={title}>Hi</h2>
    </div>
  );
}

export default App;
