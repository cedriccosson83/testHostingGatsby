import React from "react"
import Logo from "../../images/logo.svg"
import { useHomeQuery } from "../../hooks/useHomeQuery"
import { Content, HeaderLogo, HeaderTitle } from "./Home.styles"

const Home = () => {
    const { site } = useHomeQuery()

    return (
        <Content>
            <div>
                <HeaderLogo>
                    <img src={Logo} alt={site.siteMetadata.title} />
                </HeaderLogo>
                <HeaderTitle>
                    <h1>{site.siteMetadata.title}</h1>
                    <h2>{site.siteMetadata.description}</h2>
                </HeaderTitle>
            </div>
            <div>
                
            </div>
        </Content>
    )
}

export default Home
