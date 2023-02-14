import { Block, ExtendCSS, Flex, Icon, Text } from "vcc-ui"

export const Header = () => (
  <Block extend={barCSS}>
    <Flex extend={headerCSS}>
      <Icon type="map-route-40" />
      <Text variant="ootah">Tibia Travel</Text>
    </Flex>
  </Block>
)

const barCSS: ExtendCSS = ({ theme: { baselineGrid, color } }) => ({
  backgroundColor: color.background.primary,
  padding: baselineGrid * 3,
})

const headerCSS: ExtendCSS = ({ theme: { baselineGrid } }) => ({
  alignItems: "center",
  flexDirection: "row",
  gap: baselineGrid * 2,
  marginInline: "auto",
  maxWidth: "var(--container-width)",
  width: "100%",
})
