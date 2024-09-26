import React from 'react'
import './passwd.css'
import { motion } from 'framer-motion';
function Passwd(){
    return (
        <>
        <motion.div initial={{opacity:0, scale:0}} animate = {{opacity : 1, scale:1}} className="passwd">
                <label htmlFor="passwd">
                    <h3>Password: </h3><input type="password" name="pass" id="pass" placeholder='Password' />
                </label>
            </motion.div>
            <motion.div initial={{opacity:0, scale:0}} animate = {{opacity : 1, scale:1}} className="confirmPass">
                <label htmlFor="confirmPass">
                    <h3>Confirm Password: </h3><input type="password" name="confirmPass" id="confirmPass" placeholder='Confirm Password'/>
                </label>
            </motion.div>
        </>
    );
}
export default Passwd