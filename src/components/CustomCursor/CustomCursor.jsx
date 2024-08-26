import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './customCursor.css'

const CustomCursor = (props) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX - 30,
                y: e.clientY - 30
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    })

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        },
        text: {
            x: mousePosition.x,
            y: mousePosition.y,
            border: " 8px solid #111",
        },
        contact: {
            x: mousePosition.x,
            y: mousePosition.y,
            borderRadius: '0%',
            border: "4px solid #111",
        }

    }

    return <>
        <motion.div className="cursor"
            variants={variants}
            animate={props.cursorVariants}
        />

    </>
}

export default CustomCursor