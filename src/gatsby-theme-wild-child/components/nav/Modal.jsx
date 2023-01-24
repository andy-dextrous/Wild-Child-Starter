import React, { useContext, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap, ScrollTrigger } from "gatsby-theme-wild-child/src/gsap"

import { MenuContext } from "gatsby-theme-wild-child/src/components/Layout"
import { SocialFollows } from "gatsby-theme-wild-child/src/components/social/SocialFollows"
import Logo from "../../assets/logos/Logo"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react"

function Modal({ menu, styles }) {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  const theme = useTheme()
  const { mobileNavHeight } = theme.variables
  const menuWrapper = useRef()
  const overlay = useRef()
  const primaryMenuLinks = useRef()
  const navAnimation = useRef()

  useEffect(() => {
    if (!ScrollTrigger) return
    const tl = gsap
      .timeline({ paused: true })
      .fromTo(
        overlay.current,
        { visibility: "hidden", opacity: 0 },
        {
          visibility: "visible",
          opacity: 0.5,
          duration: 0.4,
          ease: "Power3.inOut",
        },
        0
      )
      .fromTo(
        menuWrapper.current,
        {
          xPercent: "-100",
        },
        {
          xPercent: "0",
          duration: 0.3,
          ease: "sine.out",
        },
        0
      )
      .fromTo(
        [".primaryMenuLink"],
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.04,
          duration: 0.15,
          ease: "sine.inOut",
        },
        0.1
      )
      .fromTo(
        ".accordion-icon",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
        }
      )
    navAnimation.current = tl
  }, [])

  useEffect(() => {
    if (!navAnimation.current) return
    if (isMenuOpen) {
      navAnimation.current.play()
    } else {
      navAnimation.current.reverse()
    }
  }, [isMenuOpen])

  return (
    <>
      <Flex
        ref={menuWrapper}
        id="navPopup"
        as="nav"
        pt={mobileNavHeight}
        sx={{
          pb: 0,
          bg: "dark.default",
          h: "100vh",
          w: ["100vw", "100vw", "400px"],
          justify: "center",
          align: "center",
          zIndex: "modal",
          position: "fixed",
          left: "0",
          top: "0",
          overflowY: ["scroll", "scroll", "hidden"],
          borderRight: "1px solid rgba(187,187,187,0.3)",
        }}
        borderRight="1px solid rgba(187,187,187,0.3)"
        display={["flex", "flex", "none"]}
      >
        <VStack
          sx={{
            w: "full",
            position: "relative",
            overflow: "hidden",
            flex: 1,
            py: [12, 12, 24],
          }}
        >
          <Center px={[12, 12, 16]} w="full" minH="70vh">
            <Stack
              w="full"
              direction={["column", "column", "column"]}
              justify={["center", "center", "space-between"]}
              align={["center", "center", "center"]}
              py={[16, 16, 20]}
              px="0"
              spacing={[20, 24, 20]}
              m="auto"
              divider={<Divider />}
            >
              <VStack
                as="nav"
                w="full"
                align="flex-start"
                spacing={[4, 4, 4, 12]}
                p={0}
                justify="flex-start"
                flex={[2]}
              >
                <Accordion
                  allowToggle
                  alignItems="start"
                  pl={[0, 0, 0]}
                  ref={primaryMenuLinks}
                >
                  {menu?.menuItems?.nodes
                    .filter(item => {
                      return !item.parentId
                    })
                    .map(item => {
                      return !item.childItems.nodes.length ? (
                        <Link
                          key={`nav-link-${item.id}`}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Text
                            className="primaryMenuLink"
                            sx={{
                              py: 2,
                              "&.primaryMenuLink": {
                                fontSize: ["xl", "xl"],
                                fontWeight: "extrabold",
                                color: "white",
                                lineHeight: 1.2,
                                transition: "color 0.1s ease-out",
                                _hover: {
                                  color: "primary.default",
                                  transform: "translateX(5px)",
                                },
                              },
                            }}
                          >
                            {item.label}
                          </Text>
                        </Link>
                      ) : (
                        <AccordionItem
                          border="none"
                          key={`nav-link-${item.id}`}
                        >
                          <AccordionButton
                            px="0"
                            py={2}
                            className="link-wrapper"
                            _hover={{ bg: "transparent" }}
                          >
                            <Text
                              className="primaryMenuLink"
                              sx={{
                                py: 2,
                                "&.primaryMenuLink": {
                                  fontSize: ["xl", "xl"],
                                  fontWeight: "semibold",
                                  lineHeight: 1.2,
                                  color: "white",
                                  transition: "color 0.1s ease-out",
                                  _hover: {
                                    color: "primary.default",
                                    transform: "translateX(5px)",
                                  },
                                },
                              }}
                            >
                              {item.label}
                            </Text>
                            <AccordionIcon
                              color="primary.default"
                              className="accordion-icon"
                              ml={1}
                            />
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            {item.childItems.nodes.map(child => {
                              return (
                                <Link
                                  key={"accordion" + child.id}
                                  to={child.path}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <Text
                                    className="subMenuLink"
                                    sx={{
                                      mb: 2,
                                      "&.subMenuLink": {
                                        fontSize: ["lg", "lg", "xl"],
                                        fontWeight: "normal",
                                        color: "white",
                                        _hover: {
                                          color: "primary.default",
                                        },
                                      },
                                    }}
                                  >
                                    {child.label}
                                  </Text>
                                </Link>
                              )
                            })}
                          </AccordionPanel>
                        </AccordionItem>
                      )
                    })}
                </Accordion>
              </VStack>
              <VStack spacing={12} align="flex-start" w="full">
                <SocialFollows
                  button
                  size="md"
                  variant="circle"
                  direction="row"
                />
                <Logo width="130px" />
              </VStack>
            </Stack>
          </Center>
        </VStack>
      </Flex>
      <Box
        sx={{
          layerStyle: "overlay",
          bg: "dark.default",
          opacity: "0.5",
          height: "100vh",
          w: "100vw",
          position: "fixed",
        }}
        ref={overlay}
        onClick={() => {
          setIsMenuOpen(false)
        }}
      />
    </>
  )
}

export default Modal
