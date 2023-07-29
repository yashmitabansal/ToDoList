import React from "react";
import "./List.css";



const List = (props) => {





  return (
    <div>
      <div className="Div_list">
      <i className="material-icons  delete_icon" 
      onClick={ () =>
    {
        props.onSelect(props.id);
    }}
      >delete</i>
        <li className="list_item">{props.text}</li>
      </div>
    </div>
  );
};

export default List;
