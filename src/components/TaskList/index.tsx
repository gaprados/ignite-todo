import { Dispatch, SetStateAction } from 'react';
import { TaskProps } from '../../App';
import { EmptyPage } from '../EmptyPage';
import TaskItem from './components/TaskItem';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskProps[];
  onUpdateTask: Dispatch<SetStateAction<TaskProps[]>>;
}

function TaskList({ tasks, onUpdateTask }: TaskListProps) {
  function handleUpdateTask(id: string) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    let newTaskArray = [...tasks];
    newTaskArray[taskIndex].isCompleted = !newTaskArray[taskIndex].isCompleted;

    onUpdateTask(newTaskArray);
  }

  return (
    <div className={styles.container}>
      {!tasks.length ? (
        <EmptyPage />
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} {...task} onUpdateTask={handleUpdateTask} />
        ))
      )}
    </div>
  );
}

export default TaskList;
