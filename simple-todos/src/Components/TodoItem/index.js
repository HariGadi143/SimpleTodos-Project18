import React, { Component } from "react";
import styles from "./index.module.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todoItem, handleDeleteTodo } = this.props;
    return (
      <div className={styles.itemCon}>
        <p>{todoItem?.title}</p>
        <button
          onClick={() => {
            handleDeleteTodo(todoItem?.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
