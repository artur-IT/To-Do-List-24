import { useState } from "react";
import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";
import { Task } from "../components/Task";

function App() {
  const allTasks = ["Zadanie 1", "Zadanie 2", "Zadanie 3", "Zadanie 4", "Zadanie 5"];
  let tasksComponents = [];
  const getRandomKey = () => Math.floor(Math.random() * 10000) + 1;

  const findAndRemoveTask = (task) => {
    setDisplayTasks((prev) => prev.filter((el) => el.props.taskName !== task));
  };
  const tableOfTasksComponents = () =>
    (tasksComponents = allTasks.map((task) => <Task taskName={task} key={getRandomKey()} findTask={findAndRemoveTask} />));
  tableOfTasksComponents();

  const [showAddTask, setShowAddTask] = useState(false);
  const [displayTasks, setDisplayTasks] = useState(tasksComponents);

  return (
    <>
      <div className="w-[500px] bg-white mx-auto p-4 rounded-xl my-5">
        <Header onAdd={() => setShowAddTask(!showAddTask)} count={displayTasks.length} />
        {showAddTask && (
          <NewTask
            displayTasks={displayTasks}
            setDisplayTasks={setDisplayTasks}
            randomKey={getRandomKey()}
            tableOfTasksComponents={tableOfTasksComponents}
            onAdd={() => setShowAddTask(!showAddTask)}
            findTask={findAndRemoveTask}
          />
        )}
        {displayTasks}
        {/* {console.log(tasksComponents)} */}
      </div>
    </>
  );
}

export default App;
