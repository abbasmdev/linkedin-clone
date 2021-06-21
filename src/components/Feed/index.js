import PostForm from "./PostForm";
import styles from "./index.module.css";
import PostItem from "./PostItem";
import { useState } from "react";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  const formSubmitHandler = ({ message }) => {
    alert(message);
  };
  return (
    <div className={styles.feed}>
      <PostForm onFormSubmit={formSubmitHandler} />
      <PostItem
        name="Abbas Moharami"
        description="Test desc"
        message="Test message"
      />
      <PostItem
        name="Abbas Moharami"
        description="Test desc"
        message="Test messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest messageTest message"
      />
      <PostItem
        name="Abbas Moharami"
        description="Test desc"
        message="Test message"
      />
    </div>
  );
};

export default Feed;
