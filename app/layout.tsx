"use client"
import type { ReactNode } from "react"
import "@/styles/globals.css"
import { StyleProvider, ThemePicker } from "vcc-ui"
import { Header } from "@/components"

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <StyleProvider>
        <ThemePicker variant="dark">
          <Header />

          {children}
        </ThemePicker>
      </StyleProvider>
    </body>
  </html>
)

export default Layout
