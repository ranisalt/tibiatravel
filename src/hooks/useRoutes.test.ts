import { renderHook } from "@testing-library/react"
import { cities } from "../enums"
import type { City } from "../types"
import { useCheapestRoute } from "./useCheapestRoute"
import { useRoutes } from "./useRoutes"

describe("Routes", () => {
  type CityPair = [City["key"], City["key"]]
  const originCities = cities.filter((city) => city.origin).map(({ key }) => key)
  const pairs = originCities
    .flatMap((source) => originCities.map((target) => [source, target] as CityPair))
    .filter(([a, b]) => a !== b)

  const { result: routes } = renderHook(() =>
    useRoutes(
      {
        explorerSocietyIceMusic: false,
        explorerSocietyRankIV: false,
        farmineCarpet: false,
        farmineSteamShip: false,
        oramond: false,
        postman: false,
        yalahar: false,
      },
      {
        boat: true,
        carpet: false,
        "explorer society portal": false,
        horse: false,
        "steam ship": true,
        walk: true,
      }
    )
  )

  it.each(pairs)("should find the route for every city pair - (%s, %s)", (source, target) => {
    const { result } = renderHook(() => useCheapestRoute(routes.current, source, target))
    expect(result.current).not.toHaveLength(0)
  })
})
