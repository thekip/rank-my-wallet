import { Box, Center, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { BsHeartFill } from "react-icons/bs"
import { FrontpageCard } from "./cards"

export function Sponsors() {
  const styles = {
    caption: {
      fontSize: "sm",
      marginBottom: "2.5rem",
      fontWeight: useColorModeValue(600, 500),
      letterSpacing: "widest",
      color: useColorModeValue("gray.600", "gray.400"),
    },
    grid: {
      columns: [2, null, 3],
      spacing: { base: "15px", sm: "30px", md: "40px" },
    },
  }

  return (
    <Box marginBottom="6rem">
      <Center>
        <Text as="h2" textTransform="uppercase" {...styles.caption}>
          Sponsored By:
        </Text>
      </Center>

      <SimpleGrid {...styles.grid}>
        <FrontpageCard title="Become a sponsor" url="/tipbox" isExternal={false}>
          <Box as={"span"} textAlign={"center"}>
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
            Become a Sponsor
          </Box>
        </FrontpageCard>

        <FrontpageCard title="Become a sponsor" url="/tipbox" isExternal={false}>
          <Box as={"span"} textAlign={"center"}>
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
            Become a Sponsor
          </Box>
        </FrontpageCard>

        <FrontpageCard title="Become a sponsor" url="/tipbox" isExternal={false}>
          <Box as={"span"} textAlign={"center"}>
            <Box
              as={BsHeartFill}
              viewBox="0 0 20 10"
              display="inline-block"
              color="red"
              marginRight="0.25rem"
            />
            Become a Sponsor
          </Box>
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
