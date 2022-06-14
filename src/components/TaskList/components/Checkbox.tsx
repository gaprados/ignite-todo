import styles from './Checkbox.module.css';

interface CheckboxProps {
  isChecked?: boolean;
  onComplete: () => void;
}

function Checkbox({ isChecked = false, onComplete }: CheckboxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input type='checkbox' checked={isChecked} id='checkbox' />
        <label onClick={onComplete} htmlFor='checkbox' />
      </div>
    </div>
  );
}

export default Checkbox;
