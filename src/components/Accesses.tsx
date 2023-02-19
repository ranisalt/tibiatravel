import { InputHTMLAttributes, useCallback } from "react"
import type { AccessOptions } from "../types"
import { Checkbox } from "./Checkbox"
import { Controls } from "./Controls"
import { Legend } from "./Legend"

const accessLabels: Record<keyof AccessOptions, string> = {
  explorerSocietyIceMusic:
    "Completed secondary mission The Ice Music of The Explorer Society quest (access to the portal between Liberty Bay and Svargrond, requires completing the main quest).",
  explorerSocietyRankIV: "Completed The Explorer Society quest (access to the portal between Northport and Port Hope).",
  farmineCarpet: "Completed The New Frontier quest (access to Farmine magic carpet).",
  farmineSteamShip: "Completed mission 2 of The New Frontier quest (50 gp discount from/to Farmine via steam ship).",
  oramond: "Achieved the rank of Citizen in the Rathleton quest (more boat routes from/to Oramond).",
  postman: "Completed mission 6 of the Postman Missions quest (10 gp discount on boats and carpets).",
  yalahar: "Completed Searoutes around Yalahar quest.",
}

export const Accesses = ({
  gridArea,
  onChange,
  options,
}: {
  gridArea: string
  onChange: (checked: Partial<AccessOptions>) => void
  options: AccessOptions
}) => {
  const getProps = useCallback(
    (key: keyof AccessOptions): InputHTMLAttributes<HTMLInputElement> => ({
      checked: options[key],
      onChange: (e) => onChange({ [key]: e.target.checked }),
      type: "checkbox",
    }),
    [options, onChange]
  )

  return (
    <div style={{ gridArea }}>
      <Legend>Accesses:</Legend>

      <Controls>
        {Object.entries(accessLabels).map(([key, label]) => (
          <Checkbox key={key}>
            <input {...getProps(key)} />
            <span>{label}</span>
          </Checkbox>
        ))}
      </Controls>
    </div>
  )
}
