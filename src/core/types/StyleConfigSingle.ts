import { SystemStyleObject, Theme, StyleProps } from "@chakra-ui/react"

/**
 * Default properties for styling single part components with working VSCode autosuggest for css
 */
interface StyleOptions {
  theme: Theme
  colorMode: "light" | "dark"
  colorScheme: string
}

type StyleInterpolation = ((options: StyleOptions) => SystemStyleObject) | StyleProps

export default interface StyleConfigSingle {
  baseStyle: StyleInterpolation
  sizes?: { [size: string]: StyleInterpolation }
  variants?: { [variant: string]: StyleInterpolation }
}
