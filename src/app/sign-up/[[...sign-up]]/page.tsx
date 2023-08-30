import { SignUp } from "@clerk/nextjs";
import React from "react";
import styles from "../../page.module.css";
export default function SignUpPage() {
  return (
    <main className={styles.main}>
    <div className={styles.center}>
      <SignUp />
    </div></main>
  );
}
