import {useMemo} from "react";
import saveTodosKey from "../../constants/saveTodosKey";

const ListChecked = () => {
  const checkedTodos = useMemo(
    () =>  JSON.parse(localStorage.getItem(saveTodosKey)),
  []
    );
  //  setCheckedTodos([])
   // setCheckedTodos((prevState)=>{[...prevState, 9]})

  return (
    <>
      <div>{checkedTodos}</div>
    </>
  );
};

export default ListChecked;
