import styles from "./index.module.css";
const HeaderOption = ({ label, Icon }) => {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.title}>{label}</span>
    </div>
  );
};

export default HeaderOption;
