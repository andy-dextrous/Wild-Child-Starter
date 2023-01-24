import React from "react"
import { useMenuQuery } from "gatsby-theme-wild-child/src/hooks/useMenuQuery"

import Hamburger from "./Hamburger"
import Modal from "./Modal"
import TopMenu from "./TopMenu"
import { Portal } from "@chakra-ui/react"

function Nav() {
  const menu = useMenuQuery("PRIMARY_MENU")

  return (
    <Portal>
      <Hamburger />
      <TopMenu menu={menu} />
      <Modal menu={menu} />
    </Portal>
  )
}

export default Nav
