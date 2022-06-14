import clipboardImg from '../../assets/clipboard.svg';
import styles from './EmptyPage.module.css';

export function EmptyPage() {
  return (
    <div className={styles.container}>
      <img src={clipboardImg} alt='Clipboard' />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
