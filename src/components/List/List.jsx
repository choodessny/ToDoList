import { useState } from "react";
import Item from "../Item/Item";
import plus from "../../resources/plus-solid.svg";

function getItem(item, setTodos, todos) {
  return (
    <Item
      onChange={(checked) => {
        setTodos(
          todos.map((oldItem) => {
            if (oldItem != item) {
              return oldItem;
            } else {
              return { ...oldItem, checked };
            }
          })
        );
      }}
      onDelete={() => {
        setTodos(
          todos.filter((oldItem) => {
            return oldItem !== item;
          })
        );
      }}
      key={item.id}
      item={item}
    />
  );
}

const List = () => {
  const [todos, setTodos] = useState([]);

  const uncheckedTodos = todos
    .filter((item) => !item.checked)
    .map((item) => getItem(item, setTodos, todos));
  const checkedTodos = todos
    .filter((item) => item.checked)
    .map((item) => getItem(item, setTodos, todos));

  const [text, setText] = useState("");
  const addItem = () => {
    setTodos([...todos, { text, id: Math.random(), checked: false }]);
    setText("");
  };
  return (
    <>
      <div class="container_for_search_line">
        <input
          placeholder="Добавьте задачу..."
          class="input_line"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.code === "Enter" && text) {
              addItem();
            }
          }}
        />
        <button class="button_plus" disabled={!text} onClick={addItem}>
          <img class="plus_img" src={plus}></img>
        </button>
      </div>
      <div className="todosContainer">
        <div>{uncheckedTodos}</div>
        {!!uncheckedTodos.length && !!checkedTodos.length && <hr />}
        <div>{checkedTodos}</div>
      </div>
    </>
  );
};
export default List;
