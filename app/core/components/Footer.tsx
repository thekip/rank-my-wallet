import { Link } from "@/components/Link"
import { Container, Flex, Text, useColorModeValue } from "@chakra-ui/react"

export function Footer() {
  const styles = {
    container: {
      bottom: 0,
      maxWidth: "100%",
      fontSize: "sm",
      padding: 5,
      paddingTop: 7,
      background: useColorModeValue("gray.200", "gray.900"),
      color: useColorModeValue("gray.700", "white"),
    },
    link: {
      color: "teal.500",
      fontWeight: "bold",
    },
  }

  return (
    <Container as="footer" centerContent {...styles.container}>
      <Flex verticalAlign="center" align="center" gridGap={2}>
        <Text>
          An{" "}
          <Link isExternal href="https://github.com/alt3" passHref {...styles.link}>
            Alt3{" "}
          </Link>
          product powered by{" "}
          <Link isExternal href="https://chakra-ui.com/" passHref {...styles.link}>
            ChakraUI{" "}
          </Link>
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
