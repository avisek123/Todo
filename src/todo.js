import React from "react";
const todo = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fas-fa-times"
          area-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default todo;
