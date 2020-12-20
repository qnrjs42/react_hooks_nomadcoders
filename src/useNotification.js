import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can i ", { body: "i love " });

  return (
    <div>
      <h1>Hello!!!</h1>
      <button onClick={triggerNotif}>Button</button>
    </div>
  );
};

export default App;
