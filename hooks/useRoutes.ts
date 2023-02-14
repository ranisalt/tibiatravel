import type { RouteOptions } from "@/types"
import { all } from "histar"
import { useMemo } from "react"
import { routes } from "./routes"

const postmanDiscounted = new Set(["boat", "carpet"])

export const useRoutes = ({ postman, ...options }: RouteOptions) => {
  const availableRoutes = useMemo(
    () => routes.filter(({ conditions = [] }) => all(conditions, (condition) => options[condition])),
    [options]
  )

  return useMemo(
    () => availableRoutes.map((r) => (postman && postmanDiscounted ? { ...r, weight: Math.max(r.weight - 10, 0) } : r)),
    [availableRoutes, postman]
  )
}
