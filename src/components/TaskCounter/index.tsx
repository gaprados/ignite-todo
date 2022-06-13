import styles from './TaskCounter.module.css';

interface TaskCounterProps {
  taskCounter: number;
  completedTasks: number;
}

function TaskCounter() {
  return (
    <div className={styles.container}>
      <h1>TaskCounter</h1>
    </div>
  );
}

export default TaskCounter;
