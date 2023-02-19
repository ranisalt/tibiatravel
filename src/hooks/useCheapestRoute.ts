import { useMemo } from "react"
import type { City, Route } from "../types"
import { dijkstra, recreatePath } from "./dijkstra"

export const useCheapestRoute = (routes: Route[], source: City["key"], target: City["key"]) => {
  const prev = useMemo(() => {
    const [, prev] = dijkstra(routes, source, target)
    return prev
  }, [routes, source, target])

  const routeMap = useMemo(
    () =>
      Object.fromEntries(
        routes
          .map(({ from, to, ...params }: Route) => [`${from} ${to}`, params] as const)
          .sort(([, { weight: a }], [, { weight: b }]) => b - a)
      ),
    [routes]
  )

  const path = useMemo(
    () => recreatePath(prev, source, target).map(([from, to]) => ({ from, to, ...routeMap[`${from} ${to}`] })),
    [prev, routeMap, source, target]
  )

  return path
}
