import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addItem, deleteItem } from "./redux/actions";
import Input from "./components/Input";
import Button from "./components/Button";

import "./index.css";

function App(props) {
  const [input, setInput] = useState("");
  function handleDelete() {
    for (var i = 0; i < props.wishList.length; i++) {
      props.deleteItem(0);
    }

    window.alert("Wish list submitted to Santa!");
  }

  return (
    <div className="pink-wrapper">
      <div className="title">MY WISHLIST</div>
      <div className="list">
        {props.wishList.map((item, index) => (
          <div
            className="list-component"
            onClick={() => props.deleteItem(index)}
          >
            {" "}
            {item}
          </div>
        ))}
      </div>
      <Input onChange={(e) => setInput(e.target.value)} type="text" />

      <Button value="Add" onClick={() => props.addItem(input)} width="120px" />
      <Button value="Submit" onClick={handleDelete} width="300px" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (input) => dispatch(addItem(input)),
    deleteItem: (index) => dispatch(deleteItem(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
