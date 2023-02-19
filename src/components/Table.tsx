import { PropsWithChildren, useMemo } from "react"
import styled from "styled-components"

const TableDiv = styled.div`
  column-gap: var(--baseline-grid);
  display: grid;
`

const TableHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
`

const TableRow = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  padding-block: var(--baseline-grid);

  & + & {
    border-block-start: 1px solid var(--color-ornament-divider);
  }
`

type Props = PropsWithChildren<{ columns: { label: string; width: string }[]; gridArea: string }>

export const Table = ({ columns, gridArea, children }: Props) => {
  const gridTemplateColumns = useMemo(
    () => columns.map(({ width }) => `minmax(max-content, ${width})`).join(" "),
    [columns]
  )

  return (
    <TableDiv style={{ gridArea, gridTemplateColumns }}>
      <TableRow>
        {columns.map(({ label }, i) => (
          <TableHeader key={i}>{label}</TableHeader>
        ))}
      </TableRow>

      {children}
    </TableDiv>
  )
}

Table.Row = TableRow
