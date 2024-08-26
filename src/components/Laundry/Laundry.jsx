import { motion } from 'framer-motion'
import './Laundry.css'
import fils from '../../assets/laundwy.png'

const Laundry = () => {
    return <>
        <div className='foot'>
            <div className="plushy">
                <motion.img
                    drag
                    dragConstraints={{
                        top: -500,
                        left: 0,
                        right: 1000,
                        bottom: 0,
                    }}
                    width="90px" src={fils} alt="Ma Peluche" />
                <span style={{marginTop: 20, fontSize: 12}}>Move me !</span>
            </div>
            <span>[ Scroll ]</span>
            <span>Web Developper</span>
        </div>
    </>
}

export default Laundry