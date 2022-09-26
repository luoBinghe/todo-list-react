import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { TasksHandler } from "./contexts/TaskContext"

function App() {
  return (
    <TasksHandler>
      <Header />
      <AddTask />
      <Tasks />
    </TasksHandler>
  )
}

export default App
