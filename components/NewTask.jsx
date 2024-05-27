import { Button } from "./Button";
import { Task } from "../components/Task";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export const NewTask = ({ displayTasks, setDisplayTasks, randomKey, showTasks: tableOfTasksComponents, onAdd, findTask }) => {
  const newTaskName = useRef(null);

  const addNewTask = () => {
    let name = newTaskName.current.value;
    if (name !== "") {
      // eslint-disable-next-line react/prop-types
      setDisplayTasks((prev) => prev.push(<Task taskName={name} key={randomKey} findTask={findTask} />));
      name = "";
    }
    console.log(displayTasks);
  };

  return (
    <>
      <div className="new_task flex flex-row flex-shrink-0 justify-between items-center my-4">
        <input className="bg-slate-300 w-9/12 px-4 py-2" ref={newTaskName} type="text" placeholder="Enter Task" />
        <Button name="add" onAdd={onAdd} tableOfTasksComponents={tableOfTasksComponents} addNewTask={addNewTask} />
      </div>
    </>
  );
};
