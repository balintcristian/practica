import Image from "next/image";
import styles from "./page.module.css";
import customStyles from "./new.module.css";

import jsonData from "../../public/data"; // Assuming you have a separate JSON file with your data

export default function MyApp() {
  return (
    <main className={styles.main}>
      <div className={customStyles.description}>
          <a id="2">
            Site realizat de{" "}
            <Image
              src="/inginerie-logo.png"
              alt="CUNBM logo"
              className={styles.vercelLogo}
              width={103}
              height={56}
              priority
            />
          </a>
      </div>
      <div className={styles.center}>
        <div className={styles.grid}>
          {jsonData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2>
                {item.title} <span>-&gt;</span>
              </h2>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </div>

    </main>
  );
}
