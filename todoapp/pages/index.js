import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo app for..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className={styles.footer}>
        <h2>This is the footer area</h2>
      </footer>
    </div>
  );
}
