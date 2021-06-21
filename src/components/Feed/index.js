import PostForm from "./PostForm";
import styles from "./index.module.css";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <PostForm />
    </div>
  );
};

export default Feed;
