import styles from "@styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Personal Blog Platform👋</h1>
      </main>
      <footer className={ styles.footer }>
        Personal Blog Platform © 2023
      </footer>
    </div>
  );
}
