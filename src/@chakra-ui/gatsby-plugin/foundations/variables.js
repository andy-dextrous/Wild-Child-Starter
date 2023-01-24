import { variables as defaults } from "gatsby-theme-wild-child/src/@chakra-ui/gatsby-plugin/foundations/variables.js"

export const variables = {
  ...defaults,

  // NAV
  navHeight: ["70px", "70px", "85px"],
  siteMarginTop: [0, 0, "125px"],
  sideMenuWidth: "0",
  logoHeight: "100%",
  logoWidth: "100px",

  /*** SECTIONS ***/
  contentMaxWidth: "1360px",
  sectionPaddingY: [0],
  sectionPaddingX: [4, 4, 12, 20, 24, 40],
  containerPaddingY: [20, 20, 32],
  containerPaddingX: [0],
  componentSpacing: [4, 8, 8, 8, 8],
  rowSpacing: [8, 8, 12, 12, 16, 20, 20],
}
