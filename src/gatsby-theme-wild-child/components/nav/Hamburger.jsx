import React, { useContext, useEffect, useRef } from "react"
import { MenuContext } from "gatsby-theme-wild-child/src/components/Layout"
import { ScrollTrigger } from "gatsby-theme-wild-child/src/gsap"

import ToggleIcon from "../../assets/icons/MenuToggleIcon"
import { IoMdClose } from "react-icons/io"
import { Button, Flex, Icon, useTheme } from "@chakra-ui/react"

function Hamburger() {
  const { setIsMenuOpen, isMenuOpen } = useContext(MenuContext)
  const container = useRef()
  const toggleMenu = useRef()
  const { variables } = useTheme()
  const { navHeight } = variables

  useEffect(() => {
    const observer = ScrollTrigger.observe({
      target: toggleMenu.current,
      type: "touch,pointer",
      onPress: () => {
        setIsMenuOpen(!isMenuOpen)
      },
    })
    return () => {
      observer.kill()
    }
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <Flex
      zIndex="tooltip"
      position="fixed"
      w={navHeight}
      py={[2, 2, 8]}
      px={[2, 2, 0]}
      h={navHeight}
      justify="center"
      align="center"
      ref={container}
      top="0"
      left="0"
      display={["flex", "flex", "none"]}
    >
      <Button
        className={isMenuOpen ? "active" : ""}
        variant="menuToggle"
        aria-label="Toggle menu"
        bg="primary.default"
        ref={toggleMenu}
      >
        {!isMenuOpen ? (
          <ToggleIcon color="white" />
        ) : (
          <Icon as={IoMdClose} color="dark.default" />
        )}
      </Button>
    </Flex>
  )
}

export default Hamburger
