import Layout from "app/core/layouts/Layout"
import { Head } from "blitz"
import { Text, VStack } from "@chakra-ui/react"
import { BackHomeButton, PageHero } from "@components"

export function Error({ statusCode, title }) {
  return (
    <>
      <Head>
        <title>Unexpected Error</title>
      </Head>

      <Layout>
        <PageHero title="Unexpected Error" />

        <VStack>
          <Text>
            Error {statusCode}: {title}
          </Text>
        </VStack>

        <BackHomeButton title="Home" marginTop="5rem" />
      </Layout>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
