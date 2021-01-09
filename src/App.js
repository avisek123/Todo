import React, { useState } from "react";
import "./styles.css";
import Todo from "./todo";

export default function App() {
  const [name, setName] = useState();
  const [items, setItems] = useState([]);
  const listofItem = () => {
    setItems((prevItem) => {
      return [...prevItem, name];
    });
    setName("");
  };
  const deleteItems = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <div className="mainDiv">
        <div className="centerDiv">
          <br />
          <h1>Todo list</h1>
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="add item"
          />
          <button onClick={listofItem}>+</button>
          <ol>
            {/* <li>{name}</li> */}
            {items.map((itemVal, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
