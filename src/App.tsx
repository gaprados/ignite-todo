import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import styles from './styles/App.module.css';

export interface TaskProps {
  id: string;
  isCompleted: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleAddTask(task: TaskProps) {
    setTasks([...tasks, task]);
  }

  return (
    <div className={styles.container}>
      <AddTask onAddTask={handleAddTask} />
      <TaskCounter />
      <TaskList tasks={tasks} onUpdateTask={setTasks} />
    </div>
  );
}

export default App;
