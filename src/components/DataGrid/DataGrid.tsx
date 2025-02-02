import { createStylesContext, Grid, useMultiStyleConfig } from "@chakra-ui/react"

const [StylesProvider, useStyles] = createStylesContext("Component")

export const DataGrid = (props) => {
  const { size, variant, children, ...rest } = props
  const styles = useMultiStyleConfig("DataGrid", { size, variant })

  return (
    <Grid sx={styles.DataGrid} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Grid>
  )
}

export default DataGrid
