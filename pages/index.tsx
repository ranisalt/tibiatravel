import { CityPicker, Header, Options, Table } from "@/components"
import { cities, transports } from "@/enums"
import { useCheapestRoute, useRoutes } from "@/hooks"
import type { RouteOptions } from "@/types"
import Head from "next/head"
import { useState } from "react"
import { Block, ExtendCSS, Flex, Icon, Text, View } from "vcc-ui"

const cityByKey = Object.fromEntries(cities.map((city) => [city.key, city] as const))
const transportByKey = Object.fromEntries(transports.map((transport) => [transport.key, transport] as const))

const Home = () => {
  type CityKey = keyof typeof cityByKey
  const [from, setFrom] = useState<CityKey>(cities[0].key)
  const [to, setTo] = useState<CityKey>(cities[0].key)
  const [options, setOptions] = useState<RouteOptions>({
    farmine: false,
    oramond: false,
    postman: false,
    walk: false,
    yalahar: false,
  })

  const routes = useRoutes(options)
  const route = useCheapestRoute(routes, from, to)

  const total = route.reduce((total, { weight }) => total + weight, 0)

  return (
    <>
      <Head>
        <title>Tibia Travel</title>
        <meta name="description" content="Find the cheapest route between two locations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Block as="main" extend={contentCSS}>
        <View extend={optionsCSS}>
          <CityPicker legend="From:" value={from} onChange={(e) => setFrom(e.target.value as CityKey)} />
          <CityPicker legend="To:" value={to} onChange={(e) => setTo(e.target.value as CityKey)} />

          <Options
            extend={{ gridArea: "options" }}
            options={options}
            onChange={(checked) => setOptions((options) => ({ ...options, ...checked }))}
          />

          {from !== to ? (
            <Table
              columns={[
                { label: "From", width: "1fr" },
                { label: "To", width: "1fr" },
                { label: "Price", width: "1fr" },
                { label: "Transport", width: "1fr" },
                { label: "Notes", width: "2fr" },
              ]}
              extend={routeCSS}
            >
              {route.map(({ from, to, weight, transport, extra }) => (
                <Table.Row key={from}>
                  <Text>{cityByKey[from].name}</Text>
                  <Text>{cityByKey[to].name}</Text>
                  <Text>{`${weight} gp`}</Text>
                  <Text>{transportByKey[transport].name}</Text>
                  <Text>{extra}</Text>
                </Table.Row>
              ))}

              <Table.Row>
                <Text subStyle="emphasis">{`Total: ${total} gp`}</Text>
              </Table.Row>
            </Table>
          ) : (
            <Flex extend={[routeCSS, emptyRouteCSS]}>
              <Icon type="info-24" />
              <Text subStyle="emphasis">Pick different cities to calculate route</Text>
            </Flex>
          )}
        </View>
      </Block>
    </>
  )
}

const contentCSS: ExtendCSS = ({ theme: { baselineGrid, color } }) => ({
  backgroundColor: color.background.secondary,
  padding: baselineGrid * 3,
})

const optionsCSS: ExtendCSS = ({ theme: { baselineGrid } }) => ({
  display: "grid",
  gap: baselineGrid * 3,

  gridTemplate: '"from to" "options options" "route route" / 1fr 1fr',
  fromL: {
    gridTemplate: '"from to options" auto "route route route" auto / 1fr 1fr 2fr',
    rowGap: baselineGrid * 6,
  },

  marginInline: "auto",

  maxWidth: "var(--container-width)",
})

const routeCSS: ExtendCSS = { gridArea: "route" }

const emptyRouteCSS: ExtendCSS = ({ theme: { baselineGrid } }) => ({
  columnGap: baselineGrid * 2,
  flexDirection: "row",
  justifyContent: "center",
})

export default Home
