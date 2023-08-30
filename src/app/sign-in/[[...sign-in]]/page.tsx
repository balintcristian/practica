import { SignIn } from "@clerk/nextjs";
import React from "react";
import styles from "../../page.module.css";
export default function SignInPage() {
  return (
    <main className={styles.main}>
    <div className={styles.center}>
      <SignIn />
    </div></main>
  );
}
