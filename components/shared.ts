import type { ExtendCSS } from "vcc-ui"

export const controlsCSS: ExtendCSS = ({ theme: { baselineGrid } }) => ({
  marginBlockStart: baselineGrid,
  rowGap: baselineGrid,
})
