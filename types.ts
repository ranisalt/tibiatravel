import { cities, transports } from "./enums"

export type City = (typeof cities)[number]
export type Transport = (typeof transports)[number]

export type RouteOptions = Record<
  | "explorerSocietyIceMusic"
  | "explorerSocietyRankIV"
  | "farmineCarpet"
  | "farmineSteamShip"
  | "oramond"
  | "postman"
  | "walk"
  | "yalahar",
  boolean
>

export type Route = {
  from: City["key"]
  to: City["key"]
  weight: number
  transport: Transport["key"]
  extra?: string
  conditions?: Exclude<keyof RouteOptions, "farmineSteamShip" | "postman">[]
}
