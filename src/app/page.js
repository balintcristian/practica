'use client'
import Image from "next/image";
import styles from "./page.module.css";
import customStyles from "./new.module.css";
import jsonData from "../pages/_meta.json"; // Assuming you have a separate JSON file with your data

export default function MyApp() {

  const data = jsonData;
  
  // Accessing each child object without creating a local constant
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(data[key]);
      const hrefValue = data[key].href;
      console.log(hrefValue);
    }
  }
  
  return (
    <main className={styles.main}>
      <div className={customStyles.description}>
{/*           <a id="2">
            Site realizat de{" "}
            <Image
             src="/inginerie-logo.png"
  alt="CUNBM logo" 
              className={styles.vercelLogo}
              width={103}
              height={56}
              priority
            />
          </a>*/}
          <p>&nbsp;</p>
      </div>
      <div className={styles.center}>
        <div className={styles.grid}>
       {/*}   {jsonData.map((item, index) => (
            <a
              key={item[index]}

href={item.href}
//onClick={router.push(item.link)}
            >
            </a>
       ))}  */}
          {Object.keys(data).map((key) => (
          <a key={key} href={data[key].href} 
          className={styles.card}
          rel="noopener noreferrer">
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
