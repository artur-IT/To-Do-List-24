// eslint-disable-next-line react/prop-types
export const Button = ({ name, isDone, deleteTask, addNewTask, onAdd }) => {
  const addButtonHandle = () => {
    onAdd();
    addNewTask();
  };

  const btnStyle = "border-solid border-2 border-black bg-slate-200 px-3 py-1 mx-2 hover:bg-slate-300";
  const buttonAdd =
    name === "add" ? (
      <button className={`${btnStyle}`} onClick={addButtonHandle}>
        Dodaj
      </button>
    ) : null;
  const buttonDel =
    name === "del" ? (
      <button className={`${btnStyle}`} onClick={deleteTask}>
        Usuń
      </button>
    ) : null;
  const buttonDone =
    name === "done" ? (
      <button className={`${btnStyle}`} onClick={isDone}>
        Zrobione
      </button>
    ) : null;

  return (
    <>
      {buttonAdd}
      {buttonDel}
      {buttonDone}
    </>
  );
};
