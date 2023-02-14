import { PropsWithChildren, useMemo } from "react"
import { Block, Extendable, ExtendCSS, Text } from "vcc-ui"

type Props = PropsWithChildren<Extendable & { columns: { label: string; width: string }[] }>

export const Table = ({ extend, columns, children }: Props) => {
  const gridTemplateColumns = useMemo(
    () => columns.map(({ width }) => `minmax(max-content, ${width})`).join(" "),
    [columns]
  )

  return (
    <Block extend={[tableCSS, { gridTemplateColumns }, extend]}>
      <TableRow>
        {columns.map(({ label }, i) => (
          <Text subStyle="emphasis" key={i}>
            {label}
          </Text>
        ))}
      </TableRow>

      {children}
    </Block>
  )
}

const TableRow = ({ children }: PropsWithChildren) => <Block extend={rowCSS}>{children}</Block>

const tableCSS: ExtendCSS = ({ theme: { baselineGrid } }) => ({
  display: "grid",
  columnGap: baselineGrid,
})

const rowCSS: ExtendCSS = ({ theme: { baselineGrid, color } }) => ({
  display: "grid",
  gridTemplateColumns: "subgrid",
  gridColumn: "1 / -1",
  paddingBlock: baselineGrid,

  "&:not(:last-child)": {
    borderBlockEndWidth: 1,
    borderBlockEndColor: color.ornament.divider,
    borderBlockEndStyle: "solid",
  },
})

Table.Row = TableRow
