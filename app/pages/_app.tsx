import { ChakraProvider } from "@chakra-ui/react"
import theme from "app/core/theme"
import { AppProps, ErrorBoundary, ErrorComponent, ErrorFallbackProps } from "blitz"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </ChakraProvider>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
