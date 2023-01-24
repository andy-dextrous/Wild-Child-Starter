import { layerStyles as defaultLayerStyles } from "gatsby-theme-wild-child/src/@chakra-ui/gatsby-plugin/layerStyles.js"

export const layerStyles = {
  ...defaultLayerStyles,
  overlay: {
    ...defaultLayerStyles.overlay,
    bg: "linear-gradient( 180deg,#000000 10%,rgba(0, 0, 0, 0) 50%,  rgba(0, 0, 0, 0) 70%, #000000 100% )",
    opacity: 1,
    width: "140%",
  },
}
