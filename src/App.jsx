import { useState } from "react";
import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";
import { Task } from "../components/Task";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const allTasks = ["Zadanie 1", "Zadanie 2", "Zadanie 3"];
  const showAllTasks = allTasks.map((task) => <Task taskName={task} key={task} />);

  return (
    <>
      <div className="w-[500px] bg-white mx-auto p-4 rounded-xl my-5">
        <Header onAdd={() => setShowAddTask(!showAddTask)} count={showAllTasks.length} />
        {showAddTask && <NewTask />}
        {/* <Task taskName="Test" /> */}
        {showAllTasks}
      </div>
    </>
  );
}

export default App;
