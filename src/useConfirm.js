import React from "react";

// message: 폼 메시지
// callback: 확인 눌렀을 때 반응
// rejection: 취소 눌렀을 때 반응
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const Confirm = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div>
      <h1>Hello!!!</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default Confirm;
