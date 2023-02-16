import type { City } from "@/types"
import { renderHook } from "@testing-library/react"
import { cities } from "../enums"
import { useCheapestRoute } from "./useCheapestRoute"
import { useRoutes } from "./useRoutes"

describe("Routes", () => {
  type CityPair = [City["key"], City["key"]]
  const pairs = cities.map((source) => cities.map((target) => [source.key, target.key] as CityPair))

  const { result: routes } = renderHook(() =>
    useRoutes({
      explorerSocietyIceMusic: false,
      explorerSocietyRankIV: false,
      farmineCarpet: false,
      farmineSteamShip: false,
      oramond: false,
      postman: false,
      walk: false,
      yalahar: false,
    })
  )

  it.each(pairs)("should find the route for every city pair - (%s, %s)", ([source, target]) => {
    const { result: path } = renderHook(() => useCheapestRoute(routes.current, source, target))
    expect(path).not.toBeUndefined()
  })
})
