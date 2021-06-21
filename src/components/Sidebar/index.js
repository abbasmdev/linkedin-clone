import { Avatar } from "@material-ui/core";
import styles from "./index.module.css";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <img
          className={styles.sidebarTopBackImg}
          src="https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il"
          alt=""
        />
        <Avatar className={styles.siebarAvatar} />
        <h2>Abbas Moharami</h2>
        <h4>abbasmdev@gmail.com</h4>
      </div>
      <div className={styles.sidebarStats}>
        <div className={styles.sidebarStat}>
          <p>Who viewed you</p>
          <p className={styles.sidebarStatNumber}>22</p>
        </div>
        <div className={styles.sidebarStat}>
          <p>Views on post</p>
          <p className={styles.sidebarStatNumber}>232</p>
        </div>
      </div>
      <div className={styles.sidebarBottom}>
        <p className={styles.sidebarBottomTitle}>Recent</p>
        <SidebarItem text="reactjs" />
        <SidebarItem text="programming" />
        <SidebarItem text="softwareengineering" />
        <SidebarItem text="design" />
        <SidebarItem text="developer" />
      </div>
    </aside>
  );
};

export default Sidebar;
