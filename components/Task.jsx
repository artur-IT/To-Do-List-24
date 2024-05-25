import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export const Task = ({ taskName }) => {
  return (
    <div className="task flex flex-row flex-shrink-0 justify-between items-center my-4 py-2 border-y-2 border-black">
      <p className="w-9/12 px-4 py-2" type="text" placeholder="Enter Task">
        {taskName}
      </p>
      <Button name="done" />
      <Button name="del" />
    </div>
  );
};
