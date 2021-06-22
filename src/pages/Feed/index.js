import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from "./index.module.css";
import FeedComponent from "../../components/Feed";
import Widgets from "../../components/Widgets";
function Feed() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <FeedComponent />

        <Widgets />
      </main>
    </React.Fragment>
  );
}

export default Feed;
