import { Button } from "./Button";

export const NewTask = () => {
  return (
    <>
      <div className="new_task flex flex-row flex-shrink-0 justify-between items-center my-4">
        <input className="bg-slate-300 w-9/12 px-4 py-2" type="text" placeholder="Enter Task" />
        <Button name="add" />
      </div>
    </>
  );
};
