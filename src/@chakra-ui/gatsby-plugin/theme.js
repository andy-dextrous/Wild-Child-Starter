import options from "../../../wc-config/index.js"
import { extendTheme } from "@chakra-ui/react"
import { textStyles } from "./textStyles"
import { layerStyles } from "./layerStyles"
import { styles } from "./globalStyle"
import components from "./components"
import sections from "./sections"
import {
  colors,
  fonts,
  fontSizes,
  sizes,
  spacing as space,
  borderRadius,
  variables,
} from "./foundations"

const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  sizes,
  space,
  borderRadius,
  variables,
  textStyles: {
    ...textStyles,
  },
  layerStyles: {
    ...layerStyles,
  },
  styles,
  components: {
    ...components,
    ...sections,
  },
  config: {
    cssVarPrefix: options.cssVarPrefix || "wild",
  },
})

export default theme
