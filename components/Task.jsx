import { useState } from "react";
import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export const Task = ({ taskName }) => {
  const [crossed, setCrossed] = useState(false);

  return (
    <div className="task flex flex-row flex-shrink-0 justify-between items-center my-4 py-2 border-b-2 border-black">
      <p className={`w-9/12 px-4 py-2  ${crossed && "line-through"}`} type="text" placeholder="Enter Task">
        {taskName}
      </p>
      <Button name="done" isDone={() => setCrossed(!crossed)} />
      <Button name="del" />
    </div>
  );
};
