import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Center } from "@chakra-ui/react"

interface CircleLinkProps {
  to: string
  text: string
}

function CircleLink({
  to = "/about-us",
  text = "About Us",
  ...props
}: CircleLinkProps) {
  return (
    <Center
      as={GatsbyLink}
      w="200px"
      h="200px"
      rounded="full"
      bg="dark.default"
      color="white"
      fontWeight="400"
      to={to}
      {...props}
    >
      {text}
    </Center>
  )
}

export default CircleLink
