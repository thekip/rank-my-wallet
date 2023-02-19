import { BlitzPage } from "@blitzjs/next"
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { BsHeartFill } from "react-icons/bs"
import { ContentContainer, MetaTags, PageHero, TipboxCard } from "src/components"
import tipboxAddresses from "src/core/constants/tipbox-addresses"
import Layout from "src/core/layouts/Layout"

const TipBox: BlitzPage = () => {
  useLingui()

  const styles = {
    grid: {
      columns: { base: 1, sm: 2 },
      spacing: { base: "2rem", sm: "4rem" },
    },
    disclaimer: {
      align: "center" as const,
      color: useColorModeValue("teal.500", "gray.500"),
      marginTop: { base: "2rem", sm: "5rem" },
    },
  }

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Tip Box`}`}
        description="Donate some coins to keep this website ad-free"
        keywords="blockchain, cardano, ergo, wallets, rankings, tip-box, support"
      />

      <ContentContainer>
        <PageHero title={<Trans>Tip Box</Trans>} />

        <Box>
          <SimpleGrid {...styles.grid}>
            <TipboxCard
              title={<Trans>cardano</Trans>}
              address={tipboxAddresses.cardano}
              url={`https://pool.pm/${tipboxAddresses.cardano}`}
            />
            <TipboxCard
              title={<Trans>ergo</Trans>}
              address={tipboxAddresses.ergo}
              url={`https://explorer.ergoplatform.com/en/addresses/${tipboxAddresses.ergo}`}
            />
          </SimpleGrid>

          <Text {...styles.disclaimer}>
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
            <Trans>Please donate to keep this website ad-free</Trans>{" "}
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
          </Text>
        </Box>
      </ContentContainer>
    </>
  )
}

TipBox.suppressFirstRenderFlicker = true
TipBox.getLayout = (page) => <Layout>{page}</Layout>

export default TipBox
