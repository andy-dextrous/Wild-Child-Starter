import { Center, Text } from "@chakra-ui/react"
import React from "react"
import Button from "gatsby-theme-wild-child/src/components/Button"

function TopBar() {
  return (
    <Center
      height="40px"
      width="100vw"
      bgGradient="linear(to-r,secondary.default 0%,primary.default 50%, primary.600)"
      display={["none", "none", "flex"]}
      gap={4}
    >
      <Text fontSize="16px" color="white" mb="0">
        Place top menu text here
      </Text>
      <Button to="/" variant="white" size="xs">
        Promotion CTA
      </Button>
    </Center>
  )
}

export default TopBar
