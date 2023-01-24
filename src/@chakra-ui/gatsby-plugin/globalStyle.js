import { base } from "./foundations/typography"
import { styles as defaultsGlobalCSS } from "gatsby-theme-wild-child/src/@chakra-ui/gatsby-plugin/globalStyle"

const globalCSS = {
  ...defaultsGlobalCSS.global,
  ...base,

  // Place all global CSS here //
  "#footer .chakra-link": {
    mt: 0,
  },

  "#post-content": {
    "h1,h2,h3,h4,h5,h6": {
      my: 8,
    },
    "img,figure": {
      borderRadius: "2xl",
      mb: "2rem",
    },
  },
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
