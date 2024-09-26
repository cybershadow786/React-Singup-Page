import React from "react";
import "./login.css"
import GoodBy from "../signUp/goodBy/goodBy";
import { motion } from "framer-motion";
function Login(props) {
        return(
        <>
         <motion.div initial={{opacity:0}} animate = {{opacity : 1}} transition={{duration:.5}}  className="mainBox">
                <div className="Headding">
                    <h1>
                        Welcome! Sign Up Here
                    </h1>
                    <h2>
                        Please Fill Out The Fields
                    </h2>
                </div>
                <div className="inputBox">
                <div className="email">
                <label htmlFor="email">
                    <h3>Enter Your Email: </h3><input type="text" name="email" placeholder='Jhon@gmail.com' id="email" required />
                </label>
            </div>
            <div className="passwd">
                <label htmlFor="passwd">
                    <h3>Enter Your Password: </h3><input type="password" name="passwd" id="passwd" placeholder='Password' />
                </label>
            </div>
                    <div className='submitBtnBox'>
                    <button type="submit" className='submitBtn' onClick={props.onGoodByClick}>
                        Login
                    </button>
                    </div>
                </div>
            </motion.div>
            
        </>
    );
}
export default Login;