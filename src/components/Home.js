import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import '../styles/home.css';

const Home = () => {
    return ( 
        <motion.div className='home' initial={{y: '-100vh'}} animate={{y: 0}} transition={{type: 'spring', duration: 1.5, bounce: 0.5}}>
            <h1>Kacper Kubić</h1>
            <h3>Junior Frontend Developer</h3>
            <Link to='about' spy={true} smooth={true} offset={10} duration={500}>
                <button>
                    <span>LEARN MORE ABOUT ME</span>
                    <div className='liquid'></div>
                </button>
            </Link>
        </motion.div>
     );
}
 
export default Home;