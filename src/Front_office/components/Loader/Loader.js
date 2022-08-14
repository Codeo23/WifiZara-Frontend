import { motion } from "framer-motion"
import Logo from "./../../Assets/logo.png"
import "./loader.scss"
const textVariants = {
    hidden : {
        opacity: 0,
        x: -50,
    },
    visible:{
        opacity: 1,
        x:-5,
        transition: {
            duration: 2,
            delay: 2,
            yoyo: Infinity,
            ease: 'esaInOut'
        }
    },
}

const pathVariants = {
    hidden:{
        opacity:0,
        pathLength: 0,
    },
    visible:{
        opacity:1,
        pathLength: 1,
        transition:{
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

const Loader = () => {
    return (
        <motion.div 
        initial={{y:0,opacity:1}}
        exit={{y:'100%',opacity:0}}
        transition={{duration:2}}
        className="loader">
            <img src={Logo} alt="logo"/>
        </motion.div>
    )
}

export default Loader