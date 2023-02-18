import { PropsWithChildren, useMemo } from "react"
import styles from "./table.module.css"

type Props = PropsWithChildren<{ columns: { label: string; width: string }[]; gridArea: string }>

export const Table = ({ columns, gridArea, children }: Props) => {
  const gridTemplateColumns = useMemo(
    () => columns.map(({ width }) => `minmax(max-content, ${width})`).join(" "),
    [columns]
  )

  return (
    <div className={styles.table} style={{ gridArea, gridTemplateColumns }}>
      <TableRow>
        {columns.map(({ label }, i) => (
          <div key={i} className={styles.th}>
            {label}
          </div>
        ))}
      </TableRow>

      {children}
    </div>
  )
}

const TableRow = ({ children }: PropsWithChildren) => <div className={styles.tr}>{children}</div>

Table.Row = TableRow
