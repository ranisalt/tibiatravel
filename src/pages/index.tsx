"use client"
import { useState } from "react"
import styled from "styled-components"
import { Accesses, CityPicker, Layout, Table, Transports } from "../components"
import { cities, transports } from "../enums"
import { useCheapestRoute, useRoutes } from "../hooks"
import "../../styles/globals.css"
import type { AccessOptions, TransportOptions } from "../types"

const cityByKey = Object.fromEntries(cities.map(({key, name}) => [key, name]))
const transportByKey = Object.fromEntries(transports.map(({key, name}) => [key, name]))

const Main = styled.main`
  display: grid;
  gap: calc(var(--baseline-grid) * 3);
  grid-template: "from to" "accesses accesses" "transports transports" "route route" / 1fr 1fr;
  margin-inline: auto;
  max-width: var(--container-width);

  @media screen and (min-width: 1024px) {
    & {
      grid-template: "from to accesses" "from to transports" "route route route" / 1fr 1fr 2fr;
      row-gap: calc(var(--baseline-grid) * 6);
    }
  }
`

const EmptyRoute = styled.div`
  column-gap: calc(var(--baseline-grid) * 2);
  display: flex;
  flex-direction: row;
  grid-area: route;
  justify-content: center;
`

const Emphasis = styled.div`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
`

const IndexPage = () => {
  type CityKey = typeof cities[number]["key"]

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

  return (
    <Layout>
      <Main>
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
          <EmptyRoute>
            <Emphasis>🛈 Pick different cities to calculate route</Emphasis>
          </EmptyRoute>
        ) : route.length === 0 ? (
          <EmptyRoute>
            <Emphasis>🛈 There is no route available, check options</Emphasis>
          </EmptyRoute>
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
                <div>{cityByKey[from]}</div>
                <div>{cityByKey[to]}</div>
                <div>{`${weight} gp`}</div>
                <div>{transportByKey[transport]}</div>
                <div>{extra}</div>
              </Table.Row>
            ))}

            <Table.Row>
              <Emphasis>{`Total: ${total} gp`}</Emphasis>
            </Table.Row>
          </Table>
        )}
      </Main>
    </Layout>
  )
}

export default IndexPage
