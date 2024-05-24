// import { useState } from "react";
import { Header } from "../components/Header";
import { NewTask } from "../components/NewTask";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <NewTask />
      </div>
    </>
  );
}

export default App;
