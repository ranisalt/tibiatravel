import { cities } from "@/enums"
import type { City } from "@/types"
import { InputHTMLAttributes, useCallback } from "react"
import styles from "./city-picker.module.css"
import { Controls } from "./Controls"
import { Legend } from "./Legend"

const originCities = cities.map((city, index) => ({ ...city, index })).filter(({ origin }) => origin)

type Props = {
  gridArea: string
  legend: string
  name: string
  setValue: (key: City["key"]) => void
  value: City["key"]
}

export const CityPicker = ({ gridArea, legend, name, setValue, value }: Props) => {
  const getProps = useCallback(
    (key: City["key"]): InputHTMLAttributes<HTMLInputElement> => ({
      checked: key === value,
      name,
      onChange: () => setValue(key),
      type: "radio",
      value: key,
    }),
    [name, setValue, value]
  )

  return (
    <div style={{ gridArea }}>
      <Legend>{legend}</Legend>

      <Controls>
        {originCities.map(({ name, key }) => (
          <label key={key} className={styles.radio}>
            <input {...getProps(key)} />
            <span>{name}</span>
          </label>
        ))}
      </Controls>
    </div>
  )
}
