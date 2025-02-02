import { Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { DataGridCellTypeBinary } from "src/components/DataGrid/DatagridCellTypeBinary"
import { DataGridCellTypeBit } from "src/components/DataGrid/DatagridCellTypeBit"
import { DataGridCellTypeDecimal } from "src/components/DataGrid/DataGridCellTypeDecimal"
import { bitsToByte } from "src/lib"

interface BitsTableProps {
  caption: string
  bits: Array<number>
  sumLabel?: string
}

export function BitsTableMobile({ caption, bits, sumLabel }: BitsTableProps) {
  useLingui()

  const reversedBits = [...bits].reverse() // create reversed clone so we can render top-down bits

  let binaryCounter = 256 // we will divide by two to generate the static binary cell headers

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
    },
    th: {
      textAlign: "left" as const,
      paddingLeft: 0,
      marginLeft: 0,
    },
    tdSumLabel: {
      colSpan: 3,
      textAlign: "right" as const,
      color: useColorModeValue("gray.600", "gray.400"),
      fontSize: "xs",
      fontFamily: "heading",
      textTransform: "uppercase" as const,
      letterSpacing: "wider",
      paddingLeft: 0,
      paddingRight: "5rem",
    },
    tdSum: {
      colSpan: 1,
      fontWeight: "extrabold",
      color: useColorModeValue("teal.500", "teal.300"),
      textAlign: "left" as const,
      paddingLeft: 0,
    },
  }

  return (
    <>
      <Text as="h3" {...styles.caption} marginBottom=".5rem">
        {caption}
      </Text>
      <Table variant="simple" {...styles.table}>
        <Thead>
          <Tr>
            <Th {...styles.th}>
              <Trans>Binaries</Trans>
            </Th>
            <Th {...styles.th}>
              <Trans>Bits</Trans>
            </Th>
            <Th {...styles.th}>
              <Trans>Decimals</Trans>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {/* One row per bit */}
          {reversedBits.map((bit, i) => {
            binaryCounter = binaryCounter / 2

            return (
              <Tr key={nextId("tr")}>
                <DataGridCellTypeBinary binary={binaryCounter} bit={bit} key={nextId("td-bin")} />
                <DataGridCellTypeBit bit={bit} key={nextId("td-bit")} />
                <DataGridCellTypeDecimal
                  bits={reversedBits}
                  bit={bit}
                  i={i}
                  key={nextId("td-dec")}
                />
              </Tr>
            )
          })}

          {/* Summary row */}
          <Tr>
            <Td borderBottom={0} colSpan={2}></Td>
            <Td borderBottom={0} {...styles.tdSum}>
              {bitsToByte(bits)}
            </Td>
          </Tr>

          <Tr>
            <Td borderBottom={0} {...styles.tdSumLabel} paddingTop={0}>
              {sumLabel}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}

export default BitsTableMobile
