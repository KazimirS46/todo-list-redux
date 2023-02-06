import styles from './emptyList.module.css';

export const EmptyList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Список Пуст</h2>
        <p className={styles.description}>Добавь какое нибудь дело</p>
      </div>
    </div>
  );
};
