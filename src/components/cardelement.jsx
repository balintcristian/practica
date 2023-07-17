import React from 'react';
import styles from '../src/app/page.module.css'
import styles from '../src/app/globals'

const CardElement = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardElement;