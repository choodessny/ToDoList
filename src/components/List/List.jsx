import { useEffect, useState } from "react";
import Item from "../Item/Item";
import plus from "../../resources/plus-solid.svg";
import saveTodosKey from "../../constants/saveTodosKey";

function getItem(item, setTodos, todos) {
  return (
    <Item
      onChange={(checked) => {
        setTodos(
          todos.map((oldItem) => {
            if (oldItem !== item) {
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
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(saveTodosKey)) || []
  );
  useEffect(() => {
    localStorage.setItem(saveTodosKey, JSON.stringify(todos));
  }, [todos]);

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
      <div className="container_for_search_line">
        <input
          placeholder="Добавьте задачу..."
          className="input_line"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.code === "Enter" && text) {
              addItem();
            }
          }}
        />
        <button className="button_plus" disabled={!text} onClick={addItem}>
          <img className="plus_img" src={plus} alt="plus"></img>
        </button>
      </div>
      <div className="todosContainer">
        <div>{uncheckedTodos}</div>
        {!!uncheckedTodos.length && !!checkedTodos.length && <hr />}
        <div>{checkedTodos}</div>
        {checkedTodos.length >= 1 && (
          <>
            <div className="delete_all">
              <button
                className="selected_all"
                onClick={() => {
                  setTodos(
                    todos.map((oldItem) => {
                      return { ...oldItem, checked: true };
                    })
                  );
                }}
              >
                Выбрать всё
              </button>
              <button
                className="delete_selected"
                onClick={() => {
                  setTodos(
                    todos.filter((oldItem) => {
                      return !oldItem.checked;
                    })
                  );
                }}
              >
                Удалить выбранное
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default List;
