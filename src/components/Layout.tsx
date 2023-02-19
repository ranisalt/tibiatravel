import type { ReactNode } from "react"
import styled from "styled-components"
import { Header } from "./Header"

const Wrapper = styled.div`
  padding: calc(var(--baseline-grid) * 3);
`

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />

    <Wrapper>{children}</Wrapper>
  </>
)
