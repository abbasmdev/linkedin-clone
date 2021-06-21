import {
  Create as CreateIcon,
  Image as ImageIcon,
  YouTube as YouTubeIcon,
  Event as EventIcon,
  Description as DescriptionIcon,
} from "@material-ui/icons";
import styles from "./index.module.css";

const FormOption = ({ Icon, label, color = "red" }) => {
  return (
    <div className={styles.option}>
      {Icon && <Icon style={{ color: color }} />}
      <span>{label}</span>
    </div>
  );
};
const PostForm = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <CreateIcon />
        <form onSubmit={formSubmitHandler}>
          <input type="text" />
          <button type="submit" hidden={true}>
            Send
          </button>
        </form>
      </div>
      <div className={styles.options}>
        <FormOption Icon={ImageIcon} color="blue" label="Photo" />
        <FormOption label="Video" Icon={YouTubeIcon} color="green" />
        <FormOption label="Event" Icon={EventIcon} color="orange" />
        <FormOption label="Write article" Icon={DescriptionIcon} color="pink" />
      </div>
    </div>
  );
};

export default PostForm;
