import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { StyleProvider, ThemePicker } from "vcc-ui"

const App = ({ Component, pageProps }: AppProps) => (
  <StyleProvider>
    <ThemePicker variant="dark">
      <Component {...pageProps} />
    </ThemePicker>
  </StyleProvider>
)

export default App
