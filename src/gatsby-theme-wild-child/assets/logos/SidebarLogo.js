import { Box } from "@chakra-ui/react"
import React, { useRef } from "react"

function Logo({ color = "white", width = "100%", height = "100%" }) {
  const logo = useRef()

  return (
    <Box
      ref={logo}
      as="svg"
      id="siteLogo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540.41 540.41"
      height={height}
      width={width}
      sx={{
        "#logo": { fill: color === "white" ? "dark.default" : "white" },
        "#circle": { fill: color !== "white" ? "dark.default" : "white" },
      }}
    >
      <circle id="circle" cx="270.21" cy="270.21" r="270.21" />
      <path
        id="logo"
        d="m473.41 156.5-91.48 229.28c-.53 1.41-1.89 2.31-3.47 2.31h-82.27c-1.51 0-2.87-.89-3.47-2.31l-34.04-86.12c-1.21-3.05-5.59-3.05-6.79 0l-34.27 86.12a3.767 3.767 0 0 1-3.47 2.31h-81.97c-1.51 0-2.87-.89-3.4-2.31L67.02 231.2c-.8-1.99.44-4.26 2.38-4.4 19.99-1.45 39.48-3.15 58.41-5.15 1.21-.13 2.34.63 2.82 1.89l39.51 103.8c1.21 3.12 5.66 3.12 6.94.07l46.34-114.97.72-1.78c.4-.98 1.22-1.66 2.17-1.8 19.37-2.99 37.8-6.25 55.23-9.51h.08c.23.3.38.6.53.97l3.77 9.3 47.7 118.1c1.21 3.13 5.66 3.05 6.87-.07l58.49-154.61.08-.15c.3-.89 1.13-1.64 2.04-1.86l68.61-18.59h.08c2.49-.6 4.53 1.79 3.62 4.09Z"
      />
    </Box>
  )
}

export default Logo
