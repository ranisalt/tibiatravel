import { dijkstra, recreatePath } from "./dijkstra"

describe("dijkstra", () => {
  it("should return the shortest path between two nodes", () => {
    const graph = [
      { from: "A", to: "B", weight: 7 },
      { from: "A", to: "C", weight: 12 },
      { from: "B", to: "C", weight: 2 },
      { from: "B", to: "D", weight: 9 },
      { from: "C", to: "E", weight: 10 },
      { from: "D", to: "F", weight: 1 },
      { from: "E", to: "D", weight: 4 },
      { from: "D", to: "F", weight: 5 },
    ]

    const [dist, prev] = dijkstra(graph, "A", "F")

    expect(dist).toStrictEqual({ A: 0, B: 7, C: 9, D: 16, E: 19, F: 17 })
    expect(prev).toStrictEqual({ B: "A", C: "B", D: "B", E: "C", F: "D" })
  })

  it("should return the path with the least amount of hops", () => {
    const graph = [
      { from: "C", to: "D", weight: 1 },
      { from: "B", to: "D", weight: 2 },
      { from: "B", to: "C", weight: 1 },
      { from: "A", to: "D", weight: 3 },
      { from: "A", to: "C", weight: 2 },
      { from: "A", to: "B", weight: 1 },
    ]

    const [dist, prev] = dijkstra(graph, "A", "F")

    expect(dist).toStrictEqual({ A: 0, B: 1, C: 2, D: 3 })
    expect(prev).toStrictEqual({ B: "A", C: "A", D: "A" })
  })

  it("should work with non-negative cyclic graphs", () => {
    const graph = [
      { from: "A", to: "B", weight: 1 },
      { from: "B", to: "C", weight: 1 },
      { from: "C", to: "B", weight: 0 },
      { from: "C", to: "D", weight: 1 },
    ]

    const [dist, prev] = dijkstra(graph, "A", "D")

    expect(dist).toStrictEqual({ A: 0, B: 1, C: 2, D: 3 })
    expect(prev).toStrictEqual({ B: "A", C: "B", D: "C" })
  })
})

describe("recreatePath", () => {
  const graph = [
    { from: "A", to: "B", weight: 7 },
    { from: "A", to: "C", weight: 12 },
    { from: "B", to: "C", weight: 2 },
    { from: "B", to: "D", weight: 9 },
    { from: "C", to: "E", weight: 10 },
    { from: "D", to: "F", weight: 1 },
    { from: "E", to: "D", weight: 4 },
    { from: "D", to: "F", weight: 5 },
  ]

  const [, prev] = dijkstra(graph, "A", "F")

  it("should return the path between source and target", () => {
    const path = recreatePath(prev, "A", "F")

    expect([...path]).toStrictEqual([
      ["A", "B"],
      ["B", "D"],
      ["D", "F"],
    ])
  })
})
