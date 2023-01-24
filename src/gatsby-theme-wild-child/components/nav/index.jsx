import React from "react"
import WcNav from "wildComponents/nav"

function Nav(props) {
  return (
    <WcNav
      props={props}
      layout="simple"
      variant="light"
      menuName="Primary"
      withSocials
      withSearch
    />
  )
}

export default Nav
