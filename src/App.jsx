import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import CustomCursor from './components/CustomCursor/CustomCursor.jsx'
import Header from './components/Header/Header.jsx'
import Rail from './components/Rail/Rail.jsx'
import Skills from './components/Skills/Skills.jsx'
import Laundry from './components/Laundry/Laundry.jsx'
import Three from './components/Three/Three.jsx'
import Resume from './components/resume/resume.jsx'


const App = () => {


    const [cursorVariants, setCursorVariants] = useState("default")

    // const textEnter = () => setCursorVariants("text")
    // const contact = () => setCursorVariants("contact")
    // const textLeave = () => setCursorVariants("default")

    return (
        <main className="page">
            <div className='Home'>


                {/* Header */}
                <Header
                    setCursorVariants={setCursorVariants}
                />



                {/* Home */}
                <Rail />
                <Laundry />
            </div>




            {/* Skill */}
            <div className='Skills'>

                <Skills />

                <Three />

            </div>



            {/* Resume */}

            <Resume/>

            {/* Cursor */}
            <CustomCursor
                cursorVariants={cursorVariants}
            />
        </main>
    )
}

export default App
