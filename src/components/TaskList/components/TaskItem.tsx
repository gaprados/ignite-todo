import { FiTrash2 } from 'react-icons/fi';
import { TaskProps } from '../../../App';
import Checkbox from './Checkbox';
import styles from './TaskItem.module.css';

interface TaskItemProps extends TaskProps {
  onUpdateTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

function TaskItem({
  id,
  description,
  isCompleted,
  onUpdateTask,
  onRemoveTask,
}: TaskItemProps) {
  return (
    <div className={styles.container}>
      <Checkbox isChecked={isCompleted} onComplete={() => onUpdateTask(id)} />
      <p className={isCompleted ? styles.done : ''}>{description}</p>
      <button onClick={() => onRemoveTask(id)}>
        <FiTrash2 />
      </button>
    </div>
  );
}

export default TaskItem;
