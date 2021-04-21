import React, { useState, useEffect } from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const { item, deleteItem } = props;

  const [isDeleting, setIsDeleting] = useState(false);

  const [text, setText] = useState('');

  const fn = () => {
    if (isDeleting) {
      return;
    }
    setIsDeleting(true);
    deleteItem(item.id).then(() => {
      setIsDeleting(false);
    });

  }

  useEffect(() => {
    let subscription = item.text$.subscribe((t) => {
      setText(t);
    });
    return () => subscription.unsubscribe()
  });

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{text}</p>
      <button className="ToDoItem-Delete" onClick={fn}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
