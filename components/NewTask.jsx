import { Button } from "./Button";
import { Task } from "../components/Task";
import { useRef } from "react";

export const NewTask = ({ setDisplayTasks, showTasks, onAdd }) => {
  const newTaskName = useRef(null);
  const addNewTask = () => {
    // console.log(newTaskName.current.value);
    if (newTaskName.current.value !== "") {
      setDisplayTasks((prev) =>
        prev.push(
          // newTaskName.current.value
          <Task taskName={newTaskName.current.value} />
        )
      );
      showTasks();
      newTaskName.current.value = "";
    }
  };

  return (
    <>
      <div className="new_task flex flex-row flex-shrink-0 justify-between items-center my-4">
        <input className="bg-slate-300 w-9/12 px-4 py-2" ref={newTaskName} type="text" placeholder="Enter Task" />
        <Button name="add" onAdd={onAdd} showTasks={showTasks} addNewTask={addNewTask} />
      </div>
    </>
  );
};
