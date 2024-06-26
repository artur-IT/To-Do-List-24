import { useState } from "react";
import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";
import { Task } from "../components/Task";

function App() {
  let tasksDB = ["Zadanie 1", "Zadanie 2", "Zadanie 3"];
  const getRandomKey = () => Math.floor(Math.random() * 10000) + 1;

  const findAndRemoveTask = (task) => {
    setDisplayTasks((prev) => prev.filter((el) => el.props.taskName !== task));
  };

  const addNewTask = (name) => {
    setDisplayTasks((prev) => [...prev, <Task taskName={name} key={getRandomKey()} findTask={findAndRemoveTask} />]);
  };

  const tableOfTasksComponents = () => tasksDB.map((task) => <Task taskName={task} key={getRandomKey()} findTask={findAndRemoveTask} />);

  const [showAddTask, setShowAddTask] = useState(false);
  const [displayTasks, setDisplayTasks] = useState(tableOfTasksComponents());

  return (
    <>
      <div className="w-[500px] bg-white mx-auto p-4 rounded-xl my-5">
        <Header onAdd={() => setShowAddTask(!showAddTask)} count={displayTasks.length} />
        {showAddTask && (
          <NewTask
            tableOfTasksComponents={() => tableOfTasksComponents()}
            onAdd={() => setShowAddTask(!showAddTask)}
            addNewTask={addNewTask}
          />
        )}
        {displayTasks}
      </div>
    </>
  );
}

export default App;
