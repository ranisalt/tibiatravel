import { Icon } from "vcc-ui"
import styles from "./header.module.css"

export const Header = () => (
  <div className={styles.banner}>
    <header className={styles.header}>
      <Icon type="map-route-40" />
      <span className={styles.headerText}>Tibia Travel</span>
    </header>
  </div>
)
