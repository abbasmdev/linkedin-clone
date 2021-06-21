import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HeaderOption from "./HeaderOption";
import styles from "./index.module.css";
import Avatar from "./Avatar";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          className={styles.logo}
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Linkedin icon"
        />
        <div className={styles.headerSearch}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={styles.headerRight}>
        <HeaderOption label="Home" Icon={HomeIcon} />
        <HeaderOption label="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption label="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption label="Messaging" Icon={ChatIcon} />
        <HeaderOption label="Notifications" Icon={NotificationsIcon} />
        <Avatar
          label="me"
          src="https://avatars.githubusercontent.com/u/26652092?v=4"
        />
      </div>
    </header>
  );
};

export default Header;
