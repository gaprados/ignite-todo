import { useState } from 'react';
import AddTask from './components/AddTask';
import { Filters } from './components/Filters';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import { usePersistedState } from './hooks/usePersistedState';
import styles from './styles/App.module.css';

export interface TaskProps {
  id: string;
  isCompleted: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = usePersistedState<TaskProps>('tasks', []);

  function handleAddTask(task: TaskProps) {
    setTasks([...tasks, task]);
  }

  return (
    <div className={styles.container}>
      <AddTask onAddTask={handleAddTask} />
      {/* TODO: */}
      {/* <Filters originalTasks={tasks} onChangeFilter={setTasks} /> */}
      <TaskCounter tasks={tasks} />
      <TaskList tasks={tasks} onUpdateTask={setTasks} />
    </div>
  );
}

export default App;
