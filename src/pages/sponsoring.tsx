import { BlitzPage } from "@blitzjs/next"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { ContentContainer, Link, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"

const Sponsoring: BlitzPage = () => {
  useLingui()

  const styles = {
    link: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
  }

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Become a Sponsor`}`}
        description="Promote your project by becoming a sponsor"
        keywords="blockchain, cardano, ergo, wallets, rankings, sponsoring, sponsor"
      />

      <ContentContainer>
        <PageHero title={t`Become a Sponsor`} />

        <Text width="70%" margin="auto" textAlign={"center"} marginBottom={10}>
          <Trans>
            If you are an individual looking to sponsor this project, please consider donating via
            the{" "}
            <Link href="/tipbox" {...styles.link}>
              Tip Box
            </Link>
            .
          </Trans>
        </Text>

        <Text width="70%" margin="auto" textAlign={"center"}>
          <Trans>
            If you are a project or business and would like to show your logo on the landing page,
            contact us on{" "}
            <Link
              href="https://www.twitter.com/RankMyWallet/"
              isExternal
              passHref
              withExternalIcon
              {...styles.link}
            >
              Twitter
            </Link>{" "}
            for more details.
          </Trans>
        </Text>
      </ContentContainer>
    </>
  )
}

Sponsoring.suppressFirstRenderFlicker = true
Sponsoring.getLayout = (page) => <Layout>{page}</Layout>

export default Sponsoring
