import type { RouteOptions } from "@/types"
import { ChangeEvent, useCallback } from "react"
import { Block, Checkbox, Extendable, Flex, Text } from "vcc-ui"
import { controlsCSS } from "./shared"

const optionLabels: Record<keyof RouteOptions, string> = {
  farmineCarpet: "Completed The New Frontier quest (access to Farmine magic carpet).",
  farmineSteamShip: "Completed mission 2 of The New Frontier quest (50 gp discount from/to Farmine via steam ship).",
  oramond: "Achieved the rank of Citizen in the Rathleton quest (more boat routes from/to Oramond).",
  postman: "Completed mission 6 of the Postman Missions quest (10 gp discount on boats and carpets).",
  walk: "Walk between cities that are connected by land.",
  yalahar: "Completed Searoutes around Yalahar quest.",
}

export const Options = ({
  extend,
  options,
  onChange,
}: Extendable & {
  options: RouteOptions
  onChange: (checked: Partial<RouteOptions>) => void
}) => {
  const getProps = useCallback(
    (key: keyof RouteOptions) => ({
      checked: options[key],
      label: optionLabels[key],
      onChange: (e: ChangeEvent<HTMLInputElement>) => onChange({ [key]: e.target.checked }),
    }),
    [options, onChange]
  )

  return (
    <Block extend={extend}>
      <Text foreground="foreground.secondary">Options:</Text>

      <Flex extend={controlsCSS}>
        <Checkbox {...getProps("farmineCarpet")} />
        <Checkbox {...getProps("farmineSteamShip")} />
        <Checkbox {...getProps("oramond")} />
        <Checkbox {...getProps("postman")} />
        <Checkbox {...getProps("walk")} />
        <Checkbox {...getProps("yalahar")} />
      </Flex>
    </Block>
  )
}
