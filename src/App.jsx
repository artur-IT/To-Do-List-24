import { useState } from "react";
import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";
import { Task } from "../components/Task";

function App() {
  const allTasks = ["Zadanie 1", "Zadanie 2", "Zadanie 3", "Zadanie 4", "Zadanie 5"];
  const getRandomKey = () => Math.floor(Math.random() * 10000) + 1;

  const findAndRemoveTask = (task) => {
    if (allTasks.includes(task)) {
      const index = allTasks.indexOf(task);
      allTasks.splice(index, 1);
      setDisplayTasks(showTasks);
    }
  };
  const showTasks = () => allTasks.map((task) => <Task taskName={task} key={getRandomKey()} findTask={findAndRemoveTask} />);

  const [showAddTask, setShowAddTask] = useState(false);
  const [displayTasks, setDisplayTasks] = useState(showTasks());

  return (
    <>
      <div className="w-[500px] bg-white mx-auto p-4 rounded-xl my-5">
        <Header onAdd={() => setShowAddTask(!showAddTask)} count={displayTasks.length} />
        {showAddTask && <NewTask setDisplayTasks={setDisplayTasks} showTasks={showTasks} onAdd={() => setShowAddTask(!showAddTask)} />}
        {displayTasks}
        {console.log(displayTasks)}
      </div>
    </>
  );
}

export default App;
