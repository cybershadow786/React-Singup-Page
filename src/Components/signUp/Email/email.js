import React from 'react'
import './email.css'
import { motion } from 'framer-motion';
function Email() {
    return (
        <>
            <motion.div initial={{opacity:0,scale:0}} animate = {{opacity : 1, scale:1}} className="email">
                <label htmlFor="email">
                    <h3>Email: </h3><input type="text" name="email" placeholder='Jhon@example' id="email" required />
                </label>
            </motion.div>
            
        </>
    );
}
export default Email;