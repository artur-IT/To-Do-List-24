import { Button } from "./Button";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export const NewTask = ({ tableOfTasksComponents, onAdd, addNewTask }) => {
  const newTaskName = useRef(null);

  const addTask = () => {
    let name = newTaskName.current.value;
    if (name !== "") {
      addNewTask(name);
      name = "";
    }
  };

  return (
    <>
      <div className="new_task flex flex-row flex-shrink-0 justify-between items-center my-4">
        <input className="bg-slate-300 w-9/12 px-4 py-2" ref={newTaskName} type="text" placeholder="Enter Task" />
        <Button name="add" onAdd={onAdd} tableOfTasksComponents={tableOfTasksComponents} addNewTask={addTask} />
      </div>
    </>
  );
};
