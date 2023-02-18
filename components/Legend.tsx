import type { ReactNode } from "react"
import styles from "./legend.module.css"

export const Legend = ({ children }: { children: ReactNode }) => <div className={styles.legend}>{children}</div>
