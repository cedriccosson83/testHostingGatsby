import React from "react"
import { HamburgerButton } from "./Hamburger.styles"
import HamburgerIcon from "../../../../images/menu-icon.svg"

const Hamburger = ({ handleMobileMenu }) => (
  <HamburgerButton onClick={handleMobileMenu}>
    <img src={HamburgerIcon} alt="menu-hamburger" />
  </HamburgerButton>
)

export default Hamburger
