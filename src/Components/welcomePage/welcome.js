import React from 'react';
import './welcom.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Welcome(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = (action) => {
    setIsClicked(!isClicked);
    if (action === 'signup') {
      props.onSignupClick();
    } else {
      props.onLoginClick();
    }
  };
  return (
    <>
        <motion.div
          initial={{ opacity:  0, scale:  0 }}
          animate={{ opacity:  1, scale:  1 }}
          className="mainBox"
          >
          <div className="Heading">
            <h1>Welcome To Our Website</h1>
            <h2>Please select any one of the following.</h2>
          </div>
          <div className="btnBox">
            <div className="signup">
              <button whileHover={{ scale: 1.1 }} onClick={() => handleButtonClick('signup')}>
                Signup
              </button>
            </div>
            <div className="login">
              <button whileHover={{ scale: 1.09 }} onClick={() => handleButtonClick('login')}>
                Login
              </button>
            </div>
          </div>
        </motion.div>
    </>
  );
}

export default Welcome;
