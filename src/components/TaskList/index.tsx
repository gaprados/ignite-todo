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
    const updatedTasks = tasks.reduce((acc: TaskProps[], currTask) => {
      if (currTask.id === id) {
        return [...acc, { ...currTask, isCompleted: true }];
      }
      return [...acc, currTask];
    }, []);
    onUpdateTask(updatedTasks);
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
