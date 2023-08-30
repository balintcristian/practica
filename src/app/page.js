"use client";
import styles from "./page.module.css";
import customStyles from "./new.module.css";
import jsonData from "../pages/_meta.json"; // Assuming you have a separate JSON file with your data

export default function MyApp() {
  const data = jsonData;

  // Accessing each child object without creating a local constant

  return (
    <main className={styles.main}>
      <div className={customStyles.description}>
        <p>&nbsp;</p>
      </div>
      <div className={styles.center}>
        <div className={styles.grid}>
          {Object.keys(data).map((key) => (
            <a
              key={key}
              href={data[key].href}
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2>
                {key} <span>-&gt;</span>
              </h2>
              <p>{data[key].title}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
