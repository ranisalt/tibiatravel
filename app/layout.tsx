"use client"
import { Header } from "@/components"
import "@/styles/globals.css"
import type { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <Header />

      {children}
    </body>
  </html>
)

export default Layout
