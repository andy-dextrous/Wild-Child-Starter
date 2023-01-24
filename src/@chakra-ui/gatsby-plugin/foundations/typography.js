import { theme } from "@chakra-ui/react"

const rem = px => px / 16 + "rem"

export const fontSizes = {
  xs: rem(13),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(20),
  "2xl": rem(28),
  "3xl": rem(30),
  "4xl": rem(40),
  "5xl": rem(45),
  "6xl": rem(60),
  "7xl": rem(78),
  "8xl": rem(96),
  "9xl": rem(110),
}

export const fonts = {
  heading: `neue-haas-grotesk-display, sans-serif, ${theme.fonts.heading}`,
  body: `"neue-haas-grotesk-display, sans-serif", ${theme.fonts.body}`,
}

const heading = {
  fontFamily: fonts.heading,
  fontWeight: "700",
  fontStyle: "normal",
}

export const p = {
  fontFamily: fonts.body,
  fontSize: ["16px", "16px", "18px"],
  letterSpacing: "-0.003em",
  lineHeight: 1.6,
  fontWeight: "400",
  color: "dark.default",
  mb: 2,
}

export const a = {
  color: "primary.default",
  fontWeight: 600,
  textDecoration: "none",
  _hover: {
    textDecoration: "none",
  },
}

export const h1 = {
  ...heading,
  fontSize: ["3xl", "4xl", "6xl", "6xl", "7xl"],
  lineHeight: ["1.2", "1.1", "1.1", "1", "1", "1", "1"],
  letterSpacing: "-2px",
}

export const h2 = {
  ...heading,
  fontSize: ["3xl", "4xl", "4xl"],
  lineHeight: "1.1",
  letterSpacing: "-1px",
}

export const h3 = {
  ...heading,
  letterSpacing: "-1px",
  fontSize: ["2xl", "3xl", "3xl"],
}

export const h4 = {
  ...heading,
  fontSize: ["xl", "2xl", "2xl"],
  lineHeight: "110%",
}

export const h5 = {
  ...heading,
  fontSize: ["lg", "xl", "2xl"],
  mb: 4,
}

export const h6 = {
  ...heading,
  fontSize: ["md", "lg", "xl"],
  mb: 4,
}

export const blockquote = {
  fontStyle: "italic",
  mx: 4,
  my: 12,
  bg: "primary.100",
  p: 6,
  borderLeft: "10px solid",
  borderLeftColor: "primary.default",
}

export const li = {
  ...p,
  listStylePosition: "inside",
  listStyleType: "disc",
}

export const ul = {
  listStyleType: "disc",
  listStylePosition: "inside",
  pl: 6,
  my: 4,
}

export const ol = {
  listStyleType: "decimal",
  listStylePosition: "inside",
  pl: 6,
  my: 4,
}

export const br = {
  display: "block",
  content: '""',
  my: 4,
}

export const globalTextStyles = {
  "ol.chakra-breadcrumb__list": {
    paddingLeft: "0",
  },
}

export const base = {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  li,
  ul,
  ol,
  br,
  ...globalTextStyles,
}
