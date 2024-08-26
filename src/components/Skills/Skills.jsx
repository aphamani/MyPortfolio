import './Skills.css'

const Skills = () => {
    return <>
        <div className="skillsContainer">
            <h2>Skills</h2>
            <ul>
                <li>
                    <p>HTML/CSS <span className='HTML'></span></p>
                </li>
                <li>
                    <p>JavaScript <span className='javaScript'></span></p>
                </li>
                <li>
                    <p>React <span className='react'></span></p>
                </li>
                <li>
                    <p>Three.js <span className='threeJs'></span></p>
                </li>
                <li>
                    <p>Git <span className='git'></span></p>
                </li>
                <li>
                    <p>Jira <span className='jira'></span></p>
                </li>
            </ul>
        </div>
    </>
}

export default Skills