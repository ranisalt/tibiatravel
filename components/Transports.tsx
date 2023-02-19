import { transports } from "@/enums"
import type { AccessOptions, Transport } from "@/types"
import { InputHTMLAttributes, useCallback } from "react"
import { Controls } from "./Controls"
import { Legend } from "./Legend"
import styles from "./options.module.css"

export const Transports = ({
  gridArea,
  onChange,
  value,
}: {
  gridArea: string
  onChange: (checked: Partial<AccessOptions>) => void
  value: Record<Transport["key"], boolean>
}) => {
  const getProps = useCallback(
    (key: Transport["key"]): InputHTMLAttributes<HTMLInputElement> => ({
      checked: value[key],
      onChange: (e) => onChange({ [key]: e.target.checked }),
      type: "checkbox",
    }),
    [onChange, value]
  )

  return (
    <div style={{ gridArea }}>
      <Legend>Transports:</Legend>

      <Controls>
        {transports.map(({ key, name }) => (
          <label key={key} className={styles.checkbox}>
            <input {...getProps(key)} />
            <span>{name}</span>
          </label>
        ))}
      </Controls>
    </div>
  )
}
