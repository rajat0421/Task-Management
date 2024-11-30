import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const fetchTasks = () => {
    setRefresh(!refresh); // Trigger re-render for TaskList
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList key={refresh} />
    </div>
  );
};

export default App;
