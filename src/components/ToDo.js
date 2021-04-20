import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ToDoItem from "./ToDoItem";
import "./ToDo.css";

import ToDoModel from "../models/to-do";

const ToDo = () => {
  const [list, setList] = useState([
    new ToDoModel(1, "clean the house"),
    new ToDoModel(2, "buy milk"),
  ]);
  const [toDo, setToDo] = useState("");
  const [showError, setShowError] = useState(false);

  const generateId = () => {
    if (list && list.length) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const displayError = () => {
    setShowError(true);
    const clearTimer = setTimeout(() => setShowError(false), 3000);
    return () => clearTimeout(clearTimer);
  };
  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      displayError();
      return;
    }
    const newId = generateId();
    const newToDo = new ToDoModel(newId, toDo);
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const deleteItem = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setList(list.filter((item) => item.id !== id));
        resolve();
      }, 3000);
    });
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((item) => {
            return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} />;
          })}
        </div>

        <div className="ToDoInput">
          <input
            type="text"
            placeholder="I need to..."
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
        <div className="ToDo-ErrorContainer">{showError && <p>Please enter a todo!</p>}</div>
      </div>
    </div>
  );
};

export default ToDo;
