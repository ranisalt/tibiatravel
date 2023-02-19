"use client"
import { Accesses, CityPicker, Table, Transports } from "@/components"
import { cities, transports } from "@/enums"
import { useCheapestRoute, useRoutes } from "@/hooks"
import type { AccessOptions, TransportOptions } from "@/types"
import { useState } from "react"
import styles from "./page.module.css"

export const metadata = {
  title: "Tibia Travel",
  description: "Find the cheapest route between two locations",
}

const cityByKey = Object.fromEntries(cities.map((city) => [city.key, city] as const))
const transportByKey = Object.fromEntries(transports.map((transport) => [transport.key, transport] as const))

const Home = () => {
  type CityKey = keyof typeof cityByKey
  const [from, setFrom] = useState<CityKey>(cities[0].key)
  const [to, setTo] = useState<CityKey>(cities[0].key)

  const [accesses, setAccesses] = useState<AccessOptions>({
    explorerSocietyIceMusic: false,
    explorerSocietyRankIV: false,
    farmineCarpet: false,
    farmineSteamShip: false,
    oramond: false,
    postman: false,
    yalahar: false,
  })

  const [transports, setTransports] = useState<TransportOptions>({
    boat: true,
    carpet: false,
    "explorer society portal": false,
    horse: false,
    "steam ship": false,
    walk: false,
  })

  const routes = useRoutes(accesses, transports)
  const route = useCheapestRoute(routes, from, to)

  const total = route.reduce((total, { weight }) => total + weight, 0)

  console.log({ routes, route, total })

  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <CityPicker gridArea="from" name="from" legend="From:" value={from} setValue={(key) => setFrom(key)} />
        <CityPicker gridArea="to" name="to" legend="To:" value={to} setValue={(key) => setTo(key)} />

        <Accesses
          gridArea="accesses"
          onChange={(checked) => setAccesses((accesses) => ({ ...accesses, ...checked }))}
          options={accesses}
        />

        <Transports
          gridArea="transports"
          onChange={(checked) => setTransports((transports) => ({ ...transports, ...checked }))}
          value={transports}
        />

        {from === to ? (
          <div className={`${styles.route} ${styles.emptyRoute}`}>
            <span className={styles.emphasis}>🛈 Pick different cities to calculate route</span>
          </div>
        ) : route.length === 0 ? (
          <div className={`${styles.route} ${styles.emptyRoute}`}>
            <span className={styles.emphasis}>🛈 There is no route available, check options</span>
          </div>
        ) : (
          <Table
            columns={[
              { label: "From", width: "1fr" },
              { label: "To", width: "1fr" },
              { label: "Price", width: "1fr" },
              { label: "Transport", width: "1fr" },
              { label: "Notes", width: "2fr" },
            ]}
            gridArea="route"
          >
            {route.map(({ from, to, weight, transport, extra }) => (
              <Table.Row key={from}>
                <div>{cityByKey[from].name}</div>
                <div>{cityByKey[to].name}</div>
                <div>{`${weight} gp`}</div>
                <div>{transportByKey[transport].name}</div>
                <div>{extra}</div>
              </Table.Row>
            ))}

            <Table.Row>
              <div className={styles.emphasis}>{`Total: ${total} gp`}</div>
            </Table.Row>
          </Table>
        )}
      </main>
    </div>
  )
}

export default Home
