import Image from "next/image"
import styles from "./header.module.css"
import roadMapIcon from "./road-map-icon.svg"

export const Header = () => (
  <div className={styles.banner}>
    <header className={styles.header}>
      <Image src={roadMapIcon} alt="road map icon" height={24} width={24} style={{ color: "white" }} />
      <span className={styles.headerText}>Tibia Travel</span>
    </header>
  </div>
)
