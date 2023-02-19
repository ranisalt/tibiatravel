import { InputHTMLAttributes, useCallback } from "react"
import styled from "styled-components"
import { cities } from "../enums"
import type { City } from "../types"
import { Controls } from "./Controls"
import { Legend } from "./Legend"

const originCities = cities.map((city, index) => ({ ...city, index })).filter(({ origin }) => origin)

const Label = styled.label`
  display: flex;
  gap: var(--baseline-grid);
  padding: calc(var(--baseline-grid) / 2);
`

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
          <Label key={key}>
            <input type="radio" {...getProps(key)} />
            <span>{name}</span>
          </Label>
        ))}
      </Controls>
    </div>
  )
}
