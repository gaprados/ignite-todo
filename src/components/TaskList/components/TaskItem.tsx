import { TaskProps } from '../../../App';
import styles from './TaskItem.module.css';

interface TaskItemProps extends TaskProps {
  onUpdateTask: (id: string) => void;
}

function TaskItem({
  id,
  description,
  isCompleted,
  onUpdateTask,
  ...rest
}: TaskItemProps) {
  return (
    <div className={styles.container}>
      <h1>{description}</h1>

      <button onClick={() => onUpdateTask(id)}>Update</button>
    </div>
  );
}

export default TaskItem;
