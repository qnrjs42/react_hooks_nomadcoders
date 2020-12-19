import React, { useState } from "react";
import { useInput } from './useInput';

const App = () => {
  // @ 입력 불가
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <h1>Hello!!!</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

export default App;
