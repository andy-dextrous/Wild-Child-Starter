import { HeroLayout1 as defaultStyles } from "wildSrc/@chakra-ui/gatsby-plugin/sections/heroLayout1.js"

export const HeroLayout1 = {
  parts: [...defaultStyles.parts],

  baseStyle: {
    ...defaultStyles.baseStyle,
  },

  sizes: {
    ...defaultStyles.sizes,
  },

  variants: {
    ...defaultStyles.variants,
  },

  defaultProps: {
    variant: "light",
    size: "lg",
  },
}
