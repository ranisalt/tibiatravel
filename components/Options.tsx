import type { RouteOptions } from "@/types"
import { InputHTMLAttributes, useCallback } from "react"
import { Controls } from "./Controls"
import { Legend } from "./Legend"
import styles from "./options.module.css"

const optionLabels: Record<keyof RouteOptions, string> = {
  explorerSocietyIceMusic:
    "Completed secondary mission The Ice Music of The Explorer Society quest (access to the portal between Liberty Bay and Svargrond, requires completing the main quest).",
  explorerSocietyRankIV: "Completed The Explorer Society quest (access to the portal between Northport and Port Hope).",
  farmineCarpet: "Completed The New Frontier quest (access to Farmine magic carpet).",
  farmineSteamShip: "Completed mission 2 of The New Frontier quest (50 gp discount from/to Farmine via steam ship).",
  oramond: "Achieved the rank of Citizen in the Rathleton quest (more boat routes from/to Oramond).",
  postman: "Completed mission 6 of the Postman Missions quest (10 gp discount on boats and carpets).",
  walk: "Walk between cities that are connected by land.",
  yalahar: "Completed Searoutes around Yalahar quest.",
}

export const Options = ({
  gridArea,
  onChange,
  options,
}: {
  gridArea: string
  onChange: (checked: Partial<RouteOptions>) => void
  options: RouteOptions
}) => {
  const getProps = useCallback(
    (key: keyof RouteOptions): InputHTMLAttributes<HTMLInputElement> => ({
      checked: options[key],
      onChange: (e) => onChange({ [key]: e.target.checked }),
      type: "checkbox",
    }),
    [options, onChange]
  )

  return (
    <div style={{ gridArea }}>
      <Legend>Options:</Legend>

      <Controls>
        {Object.entries(optionLabels).map(([key, label]) => (
          <label key={key} className={styles.checkbox}>
            <input {...getProps(key)} />
            <span>{label}</span>
          </label>
        ))}
      </Controls>
    </div>
  )
}
