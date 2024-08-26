import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import './Header.css'
import logo from '../../assets/antoine_grenouille_logo_noir.png'


const Header = (props) => {

    const textEnter = () => props.setCursorVariants("text")
    const textLeave = () => props.setCursorVariants("default")
    const contact = () => props.setCursorVariants("contact")


    return <>
        <header>
            <div className="navbar">
                <div className="logo">
                    <img width="65px" src={logo} alt="logo" />
                </div>
                <nav className="links">
                    <ul>
                        <li onMouseEnter={textEnter} onMouseLeave={textLeave}>About</li>
                        <li onMouseEnter={textEnter} onMouseLeave={textLeave}>Skills</li>
                        <li onMouseEnter={textEnter} onMouseLeave={textLeave}>Resume</li>
                    </ul>
                </nav>
                <motion.div
                    className="contactMe"
                    whileTap={{ scale: .9 }}
                >
                    <a
                        href="mailto:antoine.phamanivanh@gmail.com"
                        onMouseEnter={contact}
                        onMouseLeave={textLeave}
                    >Contact Me</a>
                </motion.div>
            </div>
        </header>
    </>

}

export default Header