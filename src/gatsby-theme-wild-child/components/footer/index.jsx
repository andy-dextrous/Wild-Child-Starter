import React from "react"
import { Link } from "gatsby-theme-wild-child/src/components/Link"
import Section from "gatsby-theme-wild-child/src/components/Section"
import { MdEmail, MdPhone } from "react-icons/md"
import { useMenuQuery } from "gatsby-theme-wild-child/src/hooks/useMenuQuery"
import { SocialFollows } from "gatsby-theme-wild-child/src/components/social/SocialFollows"
import { useThemeOptions } from "gatsby-theme-wild-child/src/hooks/useThemeOptions"
import {
  VStack,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  Stack,
  chakra,
  Box,
  Tooltip,
  Center,
} from "@chakra-ui/react"

function Footer() {
  const footerMenu1 = useMenuQuery("FOOTER_MENU_1")
  const footerMenu2 = useMenuQuery("FOOTER_MENU_2")
  const footerMenu3 = useMenuQuery("FOOTER_MENU_3")
  const { contact, googleMapsLink } = useThemeOptions()

  return (
    <>
      <Section bg="dark.default" as="footer" id="footer">
        <Stack
          w="full"
          align="start"
          justify="space-between"
          position="relative"
          direction={["column", "column", "column", "row"]}
          px={[4, 4, 0]}
          spacing={[8, 8, 12]}
        >
          <VStack
            align={["center", "center", "flex-start"]}
            w={["full", "full", "unset"]}
            spacing={6}
          >
            <Text
              fontWeight="bold"
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="gray.500"
            >
              {footerMenu1?.name}
            </Text>
            <VStack align={["center", "center", "flex-start"]} as="nav">
              {footerMenu1 &&
                footerMenu1?.menuItems?.nodes.map(item => {
                  return (
                    <Link key={item.id} to={item.path}>
                      <Text
                        fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
                        lineHeight="tall"
                        fontWeight="bold"
                        color="white"
                        transition="all 0.2s ease-in-out"
                        _hover={{
                          bgGradient:
                            "linear(to-r,secondary.default 0%,lightRed.300 50%, primary.600)",
                          bgClip: "text",
                        }}
                      >
                        {item.label}
                      </Text>
                    </Link>
                  )
                })}
            </VStack>
          </VStack>
          <VStack
            align={["center", "center", "flex-start"]}
            w={["full", "full", "unset"]}
            spacing={6}
            as="nav"
          >
            <Text
              fontWeight="bold"
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="gray.500"
            >
              {footerMenu2?.name}
            </Text>
            <VStack
              align={["center", "center", "flex-start"]}
              w={["full", "full", "unset"]}
            >
              {footerMenu2 &&
                footerMenu2?.menuItems?.nodes.map(item => {
                  return (
                    <Link key={item.id} to={item.path}>
                      <Text
                        color="white"
                        fontWeight="medium"
                        _hover={{
                          bgGradient:
                            "linear(to-r,secondary.default 0%,lightRed.300 50%, primary.600)",
                          bgClip: "text",
                        }}
                      >
                        {item.label}
                      </Text>
                    </Link>
                  )
                })}
            </VStack>
          </VStack>
          <VStack
            align={["center", "center", "flex-start"]}
            w={["full", "full", "unset"]}
            spacing={6}
            as="nav"
          >
            <Text
              fontWeight="bold"
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="gray.500"
            >
              {footerMenu3?.name}
            </Text>
            <VStack
              align={["center", "center", "flex-start"]}
              w={["full", "full", "unset"]}
            >
              {footerMenu3 &&
                footerMenu3?.menuItems.nodes.map(item => {
                  return (
                    <Link key={item.id} to={item.path}>
                      <Text
                        color="white"
                        fontWeight="medium"
                        _hover={{
                          bgGradient:
                            "linear(to-r,secondary.default 0%,lightRed.300 50%, primary.600)",
                          bgClip: "text",
                        }}
                      >
                        {item.label}
                      </Text>
                    </Link>
                  )
                })}
            </VStack>
          </VStack>

          <VStack
            align={["center", "center", "flex-start"]}
            w={["full", "full", "unset"]}
            spacing={6}
            as="nav"
          >
            <Text
              fontWeight="bold"
              fontSize="14px"
              textTransform="uppercase"
              letterSpacing="widest"
              color="gray.500"
            >
              FIND US
            </Text>
            <VStack
              align={["center", "center", "flex-start"]}
              w={["full", "full", "unset"]}
            >
              <Tooltip
                label="Click for directions"
                bg="primary.default"
                placement="top"
              >
                <chakra.a href={googleMapsLink} target="_blank">
                  <Text
                    color="white"
                    _hover={{
                      bgGradient:
                        "linear(to-r,secondary.default 0%,lightRed.300 50%, primary.600)",
                      bgClip: "text",
                    }}
                    fontWeight="medium"
                    textAlign={["center", "center", "left"]}
                  >
                    {contact.address.street}
                    <br />
                    {contact.address.city}
                    <br />
                    {contact.address.state}, {contact.address.zip}
                  </Text>
                </chakra.a>
              </Tooltip>

              <List
                sx={{
                  "*": {
                    listStyleType: "none !important",
                  },
                  pl: "0",
                }}
              >
                <ListItem
                  textAlign={["center", "center", "left"]}
                  _hover={{
                    svg: { fill: "primary.default" },
                    span: { color: "primary.default" },
                  }}
                  py={[3, 3, 1]}
                >
                  <chakra.a href={`tel:${contact.phone}`}>
                    <ListIcon as={MdPhone} color="white" fontSize="lg" />
                    <Text as="span" color="white" fontSize="sm">
                      {contact.phone}
                    </Text>
                  </chakra.a>
                </ListItem>
                <ListItem
                  textAlign={["center", "center", "left"]}
                  _hover={{
                    svg: { fill: "primary.default" },
                    span: { color: "primary.default" },
                  }}
                  py={[3, 3, 1]}
                >
                  <chakra.a href={`mailto:${contact.email}`}>
                    <ListIcon as={MdEmail} color="white" fontSize="lg" />
                    <Text as="span" color="white" fontSize="sm">
                      {contact.email}
                    </Text>
                  </chakra.a>
                </ListItem>
              </List>
            </VStack>

            <HStack as="nav">
              <SocialFollows
                flexDirection={["row", "row", "row"]}
                button={true}
                align="center"
                size="sm"
                mb={["unset", "unset"]}
              />
            </HStack>
          </VStack>
        </Stack>
        <Box
          position="absolute"
          display={["block", "block", "none"]}
          bg="dark.default"
          left="0"
          top="-25px"
          w="100vw"
          h="5vh"
          px="9%"
          py={3}
          roundedTop={"25px"}
          zIndex="20"
        ></Box>
      </Section>
      <Center bg="primary.default" w="100vw" bottom="0" left="0" h="60px">
        <Text color="white" fontSize="sm" mb="0">
          {`Copyright © ${new Date().getFullYear()} | VZX`}
        </Text>
      </Center>
    </>
  )
}

export default Footer
