import React, { useState } from "react";
import "./ToDoList.css";
import List from "./List";

const ToDoList = () => {
  const [taskname, setInputList] = useState();
  const [item, setItem] = useState([]);

  const settaskname = (event) => {
    setInputList(event.target.value);
  };

  const listofitam = () => {
    setItem((oldItem) => {
      return [...oldItem, taskname];
    });

    setInputList("");
  };

  const DeleteItem = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div className="main_div">
        <div className="center_div"></div>
        <br />
        <h1 className="Heading_1">To DO List</h1>
        <br />
        <input
          type="text"
          value={taskname}
          placeholder=" Add Task"
          onChange={settaskname}
          className="input_1"
        />
        <button className="plusSign" onClick={listofitam} > + </button>
        <ol>
          {item.map((itemvalue, index) => {
            return (
              <List
                key={index}
                id={index}
                text={itemvalue}
                onSelect={DeleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
