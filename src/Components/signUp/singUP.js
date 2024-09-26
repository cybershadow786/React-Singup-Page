import React from 'react'
import { useState } from 'react';
import './singUP.css'
import Name from './Names/name.js';
import DobGender from './DOB&Gender/dob&gender.js';
import Passwd from './passwd/passwd.js';
import Email from './Email/email.js';
import { motion } from 'framer-motion';
import GoodBy from './goodBy/goodBy.js';
function SingUp() {
    const [currentPage, setCurrentPage] = useState(0); 
    const pages = [<Name />, <DobGender />, <Passwd /> ,<Email />]; 
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1); 
    } else {
        setCurrentPage(4)
     console.log('good by ', currentPage);
    }
  };
    return (
        <>
        {currentPage === 4 ? <GoodBy/> :  (
            <motion.div initial={{opacity:0}} animate = {{opacity : 1}} transition={{duration:.5}} className="mainBox">
                <div className="Headding">
                    <h1>
                        Welcome! Sign Up Here
                    </h1>
                    <h2>
                        Please Fill Out The Fields
                    </h2>
                </div>
                <div className="inputBox">
                {pages[currentPage]}
                    <div className='submitBtnBox'>
                    <button type="submit" className='submitBtn' onClick={() => handleNext()}>
                        Submit
                    </button>
                    </div>
                </div>
            </motion.div>
            ) }
        </>
    );
}
export default SingUp;