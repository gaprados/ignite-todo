import { useState } from 'react';
import { TaskProps } from '../../App';
import styles from './TaskCounter.module.css';

interface TaskCounterProps {
  tasks: TaskProps[];
}

function TaskCounter({ tasks }: TaskCounterProps) {
  const taskCounter = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length ?? 0;

  return (
    <div className={styles.container}>
      <div>
        <strong>Tarefas criadas</strong>
        <span>{taskCounter}</span>
      </div>
      <div>
        <strong>Concluídas</strong>
        <span>
          {completedTasks} de {taskCounter}
        </span>
      </div>
    </div>
  );
}

export default TaskCounter;
