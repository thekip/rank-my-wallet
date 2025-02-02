import { AppProps, ErrorBoundary, ErrorFallbackProps } from "@blitzjs/next"
import { ChakraProvider } from "@chakra-ui/react"
import { I18nProvider } from "@lingui/react"
import { Analytics } from "@vercel/analytics/react"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users
import { withBlitz } from "src/blitz-client"
import theme from "src/core/theme"
import Error from "src/pages/_error"
import { useLinguiInit } from "src/translations/utils"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <Error statusCode={error.statusCode || 400} title={error.message || error.name} />
}

interface CustomPageProps {
  i18n: any
}

function MyApp({ Component, pageProps: { i18n, ...pageProps } }: AppProps<CustomPageProps>) {
  const getLayout = Component.getLayout || ((page) => page)
  const initializedI18n = useLinguiInit(i18n)

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <I18nProvider i18n={initializedI18n}>
          {getLayout(<Component {...pageProps} />)}
        </I18nProvider>
        <Analytics />
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default withBlitz(MyApp)
