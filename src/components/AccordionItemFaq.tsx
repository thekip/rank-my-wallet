import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"

export function AccordionItemFaq({ question, children }) {
  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <AccordionItem borderStyle="none">
      <h2>
        <AccordionButton p={0}>
          <Box flex="1" textAlign="left" color="teal.300">
            {question}
          </Box>
          <Box as="span" verticalAlign="top" minHeight={{ base: "4rem", md: "3rem" }}>
            <AccordionIcon color={accordionIconColor} />
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel p={0} marginRight="2rem">
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default AccordionItemFaq
