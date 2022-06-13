import { TaskProps } from '../../App';
import { FiPlusCircle } from 'react-icons/fi';
import styles from './AddTask.module.css';
import { FormEvent, useState } from 'react';

interface AddTaskProps {
  onAddTask: (task: TaskProps) => void;
}

function AddTask({ onAddTask }: AddTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const id = Math.random().toString(16).slice(2);

    onAddTask({
      id,
      isCompleted: false,
      description: newTask,
    });

    setNewTask('');
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.container}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa...'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button type='submit' disabled={!newTask}>
        Criar
        <FiPlusCircle size={16} />
      </button>
    </form>
  );
}

export default AddTask;
