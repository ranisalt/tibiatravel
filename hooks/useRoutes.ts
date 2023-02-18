import type { Route, RouteOptions } from "@/types"
import { all, compress } from "histar"
import { useMemo } from "react"
import { routes } from "./routes"

const applyDiscount = (predicate: (route: Route) => boolean, discount: number) => (route: Route) =>
  predicate(route) ? { ...route, weight: Math.max(route.weight - discount, 0) } : route

const farmineDiscount = applyDiscount(
  (r) => (r.from === "farmine" || r.to === "farmine") && r.transport === "steam ship",
  50
)

const postmanDiscount = applyDiscount(
  ({ to, transport }) =>
    to !== "gray island" && (transport === "boat" || transport === "carpet" || transport === "steam ship"),
  10
)

export const useRoutes = ({ farmineSteamShip, postman, ...options }: RouteOptions) => {
  const availableRoutes = useMemo(
    () => routes.filter(({ conditions = [] }) => all(conditions, (condition) => options[condition])),
    [options]
  )

  const filters = useMemo(
    () => [...compress([farmineDiscount, postmanDiscount], [farmineSteamShip, postman])],
    [farmineSteamShip, postman]
  )

  return useMemo(
    () => availableRoutes.map((route) => filters.reduce((route, fn) => fn(route), route)),
    [availableRoutes, filters]
  )
}
