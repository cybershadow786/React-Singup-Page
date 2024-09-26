import React from "react";
import "./name.css";
import { motion } from 'framer-motion';
function Name() {
    return (
        <>
            <motion.div initial={{opacity:0 , scale:0}} animate = {{opacity : 1 , scale:1}} className="Fname">
                <label htmlFor="fname">
                    <h3>First Name: </h3><input type="text" name="fname" placeholder='Jhon' id="fname" required />
                </label>
            </motion.div>
            <motion.div initial={{opacity:0 , scale:0}} animate = {{opacity : 1 , scale:1}} className="Lname">
                <label htmlFor="lname">
                    <h3>Last Name: </h3><input type="text" name="lname" id="lname" placeholder='Smith' />
                </label>
            </motion.div>
        </>
    );
}
export default Name;