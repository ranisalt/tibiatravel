import type { ReactNode } from "react"
import styles from "./controls.module.css"

export const Controls = ({ children }: { children: ReactNode }) => <div className={styles.controls}>{children}</div>
