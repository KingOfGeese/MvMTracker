import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/App.css'

function App() {
  const [background, setBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground((background) => background + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{opacity:0}}
        animate = {{opacity: 1, transition:{duration: 4}}}
        exit={{opacity: 0 }}
        
        className="backgroundImage"
        key={background}
      ></motion.div>
    </AnimatePresence>
  );
}

export default App
