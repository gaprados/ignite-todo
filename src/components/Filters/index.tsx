import { FiFilter } from 'react-icons/fi';
import { TaskProps } from '../../App'
import styles from './Filters.module.css'

interface FilterProps {
  originalTasks: TaskProps[];
  onChangeFilter: (newTaskList: TaskProps[]) => void
}

export function Filters({ originalTasks, onChangeFilter }: FilterProps) {
  return (
    <div className={styles.container}>
      <label htmlFor="filters">
        <FiFilter />
        <select id="filters">
          <option value="all">Todas</option>
          <option value="completed">Concluídas</option>
          <option value="uncompleted">Não concluídas</option>
        </select>
      </label>
    </div>
  )
}