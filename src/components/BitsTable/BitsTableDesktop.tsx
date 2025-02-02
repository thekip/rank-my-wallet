import { Table, Tbody, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { DataGridCellTypeBinary } from "src/components/DataGrid/DatagridCellTypeBinary"
import { DataGridCellTypeBit } from "src/components/DataGrid/DatagridCellTypeBit"
import { DataGridCellTypeDecimal } from "src/components/DataGrid/DataGridCellTypeDecimal"
import { bitsToByte } from "src/lib"

interface BitsTableProps {
  caption: string
  bits: Array<number | null>
  sumLabel?: string
}

export function BitsTableDesktop({ caption, bits, sumLabel }: BitsTableProps) {
  useLingui()

  const reversedBits = [...bits].reverse() // create reversed clone so we can render top-down bits

  let binaryCounter = 256 // we will divide by two to generate the static binary cell headers

  // add nullified trailing bits to get to 8-bit format
  if (reversedBits.length !== 8) {
    for (let i = 0; i <= 8 - reversedBits.length; i++) {
      bits.push(null)
      i++
    }
  }

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
    },
    td: {
      textAlign: "center" as const,
    },
    tdField: {
      textAlign: "left" as const,
      padding: 0,
      margin: 0,
    },
    tdSum: {
      fontWeight: "extrabold",
      color: useColorModeValue("teal.500", "teal.300"),
      marginRight: "0.25rem",
      borderBottom: "1px",
    },
    tdSumLabel: {
      border: "none",
      colSpan: 10,
      textAlign: "right" as const,
      color: useColorModeValue("gray.600", "gray.400"),
      fontSize: "xs",
      fontFamily: "heading",
      textTransform: "uppercase" as const,
      letterSpacing: "wider",
      paddingRight: "0.3rem",
      marginRight: 0,
    },
  }

  return (
    <>
      <Text as="h3" {...styles.caption} marginBottom=".5rem">
        {caption}
      </Text>
      <Table variant="simple" {...styles.table}>
        <Tbody>
          <Tr>
            {/* binary row */}
            <Td {...styles.td} {...styles.tdField}>
              <Trans>Binaries</Trans>
            </Td>

            {reversedBits.map((bit) => {
              binaryCounter = binaryCounter / 2
              return (
                <DataGridCellTypeBinary binary={binaryCounter} bit={bit} key={nextId("td-bin")} />
              )
            })}

            <Td {...styles.td} borderBottom="0">
              &nbsp;
            </Td>
          </Tr>

          {/* bits row */}
          <Tr>
            <Td {...styles.td} {...styles.tdField}>
              <Trans>Bits</Trans>
            </Td>

            {reversedBits.map((bit) => {
              return <DataGridCellTypeBit bit={bit} key={nextId("td-bit")} />
            })}

            <Td {...styles.td} borderBottom="0">
              &nbsp;
            </Td>
          </Tr>

          {/* decimal row */}
          <Tr>
            <Td {...styles.td} {...styles.tdField}>
              <Trans>Decimals</Trans>
            </Td>

            {reversedBits.map((bit, i) => {
              return (
                <DataGridCellTypeDecimal
                  bits={reversedBits}
                  bit={bit}
                  i={i}
                  key={nextId("td-dec")}
                />
              )
            })}

            <Td {...styles.td} {...styles.tdSum} border="1px solid" borderBottom="0">
              {bitsToByte(bits)}
            </Td>
          </Tr>

          {/* Summary row */}
          <Tr border={"none"}>
            <Td {...styles.tdSumLabel}>{sumLabel}</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}

export default BitsTableDesktop
