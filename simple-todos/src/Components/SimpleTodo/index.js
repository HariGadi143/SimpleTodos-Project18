import React, { Component } from "react";
import styles from "./index.module.css";
import TodoItem from "../TodoItem";

const initialTodoList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow neight",
  },
  {
    id: 3,
    title: "Order fruits on big basket",
  },
  {
    id: 4,
    title: "Confirm the slot for yoga session for tomorrow morning",
  },
  {
    id: 5,
    title: "Fix the production issue",
  },
];

class SimpleTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosList: initialTodoList,
    };
  }

  handleDeleteTodo = (todoId) => {
    let updatedList = this.state.todosList.filter((item) => item.id !== todoId);
    this.setState({ todosList: updatedList });
  };

  render() {
    const { todosList } = this.state;
    console.log(todosList);

    return (
      <div className={styles.mainContainer}>
        <div className={styles.simpletodosWrapper}>
          <div className={styles.wrapperCon}>
            <h1>Simple Todos</h1>
            <div className={styles.todosWrapper}>
              {todosList.map((item) => {
                return (
                  <TodoItem
                    key={item?.id}
                    todoItem={item}
                    handleDeleteTodo={this.handleDeleteTodo}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleTodo;
