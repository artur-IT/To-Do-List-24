import { useState } from "react";
import { useRef } from "react";
import { Button } from "./Button";

export const Task = ({ taskName, findTask }) => {
  const [crossed, setCrossed] = useState(false);
  const [removed, setRemoved] = useState(false);
  const taskNameRef = useRef(null);

  const deleteTask = () => {
    const task = taskNameRef.current.textContent;
    findTask(task);
  };

  return (
    <div className="task flex flex-row flex-shrink-0 justify-between items-center my-4 py-2 border-b-2 border-black">
      <p className={`w-9/12 px-4 py-2  ${crossed && "line-through"}`} ref={taskNameRef} type="text" placeholder="Enter Task">
        {taskName}
      </p>
      <Button name="done" isDone={() => setCrossed(!crossed)} />
      <Button name="del" isRemoved={() => setRemoved(!removed)} deleteTask={deleteTask} />
    </div>
  );
};
