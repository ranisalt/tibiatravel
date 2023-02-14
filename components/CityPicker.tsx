import { Extendable, Flex, Radio, RadioGroup, RadioGroupProps } from "vcc-ui"
import { cities } from "@/enums"
import { controlsCSS } from "./shared"

const originCities = cities.map((city, index) => ({ ...city, index })).filter(({ origin }) => origin)

type Props = Extendable & Pick<RadioGroupProps, "legend" | "name" | "onChange" | "value">

export const CityPicker = ({ extend, ...props }: Props) => (
  <RadioGroup {...props}>
    <Flex extend={[controlsCSS, extend]}>
      {originCities.map(({ name, key }) => (
        <Radio key={key} value={key} label={name} />
      ))}
    </Flex>
  </RadioGroup>
)
