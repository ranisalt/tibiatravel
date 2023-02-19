import { cities, transports } from "./enums"

export type City = (typeof cities)[number]
export type Transport = (typeof transports)[number]

export type AccessOptions = Record<
  | "explorerSocietyIceMusic"
  | "explorerSocietyRankIV"
  | "farmineCarpet"
  | "farmineSteamShip"
  | "oramond"
  | "postman"
  | "yalahar",
  boolean
>

export type TransportOptions = Record<Transport["key"], boolean>

export type Route = {
  from: City["key"]
  to: City["key"]
  weight: number
  transport: Transport["key"]
  extra?: string
  conditions?: Exclude<keyof AccessOptions, "farmineSteamShip" | "postman">[]
}
