import { Td } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"

interface Props {
  binary: number
  bit?: number | null
}

export const DataGridCellTypeBinary = ({ binary, bit }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const styles = {
    td: {
      color: "inherit",
      fontWeight: "inherit",
    },
  }

  if (bit === null) {
    styles.td.color = "gray.600"
    styles.td.fontWeight = "bold"
  }

  const paddingLeft = isMobile ? 0 : "inherit"

  return (
    <Td {...styles.td} paddingLeft={paddingLeft}>
      {binary}{" "}
    </Td>
  )
}

export default DataGridCellTypeBinary
