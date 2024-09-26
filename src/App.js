import React, { useState } from 'react';
import Welcome from './Components/welcomePage/welcome.js';
import SignUp from './Components/signUp/singUP.js';
import Login from './Components/login/login.js';
import GoodBy from './Components/signUp/goodBy/goodBy.js';
import { motion } from 'framer-motion';
function App() {
  const [currentComponent, setCurrentComponent] = useState('welcome');

  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
  };

  let renderedComponent;
  switch (currentComponent) {
    case 'welcome':
      renderedComponent = (
        <Welcome
          onSignupClick={() => handleButtonClick('signup')}
          onLoginClick={() => handleButtonClick('login')}
        />
      );
      break;
    case 'signup':
      renderedComponent = <SignUp />;
      break;
    case 'login':
      renderedComponent = <Login
        onGoodByClick={() => handleButtonClick('goodBy')}
      />
      break;
    case 'goodBy':
      renderedComponent = <GoodBy />
      break;

    default:
      renderedComponent = <div>Error: Unknown component</div>;
  }

  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} transition={{duration: .5}} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className="App">
      {renderedComponent}
    </motion.div>
  );
}

export default App;
