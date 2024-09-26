import React from 'react'
import './goodBy.css'
import { motion } from 'framer-motion';
function GoodBy(props) {
    return (
        <>
        <motion.div initial={{opacity:0 , x : -150}} animate = {{opacity : 1 , x:0}} transition={{duration:.5}}  className="mainBox">
        <div className="Headding">
          <h1>
            Thaks For Visiting Our Website.
          </h1>
          <h2>
            We Are Wating For You.
          </h2>
        </div>
        <div className="btnBox">
          <img className='byPic' src="/Images/byby.gif" alt="By By"  />
        </div>
        </motion.div>
        </>
      );
}
export default GoodBy;