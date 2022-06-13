import styles from './EmptyPage.module.css';

export function EmptyPage() {
  return (
    <div className={styles.container}>
      <img src='/src/assets/clipboard.svg' alt='Clipboard' />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
