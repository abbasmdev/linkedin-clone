import { useEffect, useState } from "react";
import firebase from "firebase";
import { db as firebaseDb } from "../../firebase";
import PostForm from "./PostForm";
import styles from "./index.module.css";
import PostItem from "./PostItem";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  const formSubmitHandler = ({ message }) => {
    firebaseDb.collection("posts").add({
      name: "Abbas Moharami",
      description: "test desc",
      message,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  useEffect(() => {
    firebaseDb
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const mapedData = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        });
        setPosts(mapedData);
      });
  }, []);
  return (
    <div className={styles.feed}>
      <PostForm onFormSubmit={formSubmitHandler} />
      {posts.map((post) => (
        <PostItem
          key={post.id}
          name={post.data.name}
          description={post.data.description}
          message={post.data.message}
          photoUrl={post.data.photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
