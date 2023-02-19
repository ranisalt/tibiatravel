import type { AccessOptions, Route, TransportOptions } from "@/types"
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

export const useRoutes = ({ farmineSteamShip, postman, ...accesses }: AccessOptions, transports: TransportOptions) => {
  const availableRoutes = useMemo(
    () =>
      routes.filter(({ transport, conditions = [] }) => transports[transport] && all(conditions, (c) => accesses[c])),
    [accesses, transports]
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
