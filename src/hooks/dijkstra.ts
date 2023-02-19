import { PriorityQueue } from "@js-sdsl/priority-queue"
import { filter } from "histar"

export const dijkstra = <V extends string>(graph: { from: V; to: V; weight: number }[], source: V, target: V) => {
  const vertices = [...new Set(graph.flatMap(({ from, to }) => [from, to]))]

  const dist = Object.fromEntries(vertices.map((v) => [v, Infinity]))
  const prev: { [k in V]?: V } = {}

  dist[source] = 0

  const q = new PriorityQueue<V>([], (u, v) => dist[u] - dist[v])
  q.push(source)

  while (q.length !== 0) {
    const u = q.pop()!
    if (u === target) break

    for (const { to, weight } of filter(graph, ({ from }) => from === u)) {
      const alt = dist[u] + weight
      if (alt < dist[to]) {
        dist[to] = alt
        prev[to] = u
        q.push(to)
      }
    }
  }

  return [dist, prev] as const
}

export const recreatePath = <V extends string>(prev: { [k in V]?: V }, source: V, target: V) => {
  if (!(target in prev)) return []

  const path: [V, V][] = []
  while (target !== source) {
    const prevTarget = prev[target]!
    path.push([prevTarget, target])
    target = prevTarget
  }
  return path.reverse()
}
