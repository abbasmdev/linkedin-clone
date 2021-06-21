import React from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Feed />
        {/* 
        <Widgets /> */}
      </main>
    </div>
  );
}

export default App;
