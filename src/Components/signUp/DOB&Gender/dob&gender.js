import React from 'react'
import './dob&gender.css'
import { motion } from 'framer-motion';
function DobGender() {
    return (
        <>
            <motion.div initial={{opacity:0 , scale:0}} animate = {{opacity : 1, scale:1}} className="bDay">
                <label htmlFor="birthday">
                    <h3>Enter your Date Of Birth: </h3>
                </label>
                <input type="date" name="birthday" id="birthday" required />
            </motion.div>
            <motion.div initial={{opacity:0 , scale:0}} animate = {{opacity : 1, scale:1}} className="gender">
                <h3>Select your Gender</h3>
                <form action="#" className="form">
                    <div className="male">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="female">
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className="other">
                        <input
                            type="radio"
                            id="Other"
                            name="gender"
                            value="Other"
                        />
                        <label htmlFor="Other">Rather Not To Say</label>
                    </div>
                </form>
            </motion.div>
        </>
    );
}

export default DobGender;