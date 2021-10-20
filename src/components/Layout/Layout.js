import React, { useState } from "react"
import Header from "./Header/Header"
import Hamburger from "./Header/Hamburger/Hamburger"
import MobileMenu from "./Header/MobileMenu/MobileMenu"
import Footer from "./Footer/Footer"
import { GlobalStyles, Primary } from "./Layout.styles"

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMobileMenu = () => setMenuOpen(prev => !prev)

    return (
        <>
            <GlobalStyles />
            <Hamburger handleMobileMenu={handleMobileMenu} />
            <MobileMenu menuOpen={menuOpen} callback={handleMobileMenu} />
            <Header />
            <Primary>{children}</Primary>
            <Footer />
        </>
    )
}

export default Layout
