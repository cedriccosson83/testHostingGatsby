import React from "react"
import { Link } from "gatsby"
import Menu from "./Menu/Menu"
import Logo from "../../../images/logo.svg"
import { useMenuQuery } from "../../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {
  const { site, menu } = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} height="50px" width="50px" alt={site.siteMetadata.title} />
        </Link>
        <Menu menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
