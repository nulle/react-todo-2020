import React, { useState } from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { item, deleteItem } = props;

  const [isDeleting, setIsDeleting] = useState(false);

  const fn = () => {
    if (isDeleting) {
      return;
    }
    setIsDeleting(true);
    deleteItem(item.id).then(() => {
      setIsDeleting(false);
    });

  }

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item.text}</p>
      <button className="ToDoItem-Delete" onClick={fn}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
