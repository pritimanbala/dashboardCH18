import './App.css'
import Navbar from './components/Navbar.jsx'
import { CiWallet } from "react-icons/ci";
import { BsSpeedometer } from "react-icons/bs";
import Email from './components/email.jsx'
import Todo from './components/todo.jsx'
import Calender from './components/calender.jsx'
import Weather from './components/weather.jsx'
import { motion } from "framer-motion";


function App() {
  return (
    <>
    <div className='main'>
      <Navbar />
        <div className='outmain'>
          <div className="right">
            <div className='one'>
              <motion.div whileTap={{scale: 0.95}} whileHover={{scale:1.05}} className="one-right">
                <CiWallet size={50} />
                <p style={{fontSize: "1rem", whiteSpace: "nowrap"}}>Your Bank Balance</p>
                <p style={{fontSize:"1.5rem", fontWeight: '500', margin: "0"}}>₹123,456</p>
              </motion.div>
              <motion.div whileTap={{scale: 0.95}} whileHover={{scale:1.05}} className="one-left">
                <BsSpeedometer size={50} />
                <p>Expenditure Average</p>
                <p style={{fontSize:"1.5rem", fontWeight: '500', color:"#a60b32", margin: "0"}}>High</p>
              </motion.div>
            </div>
            <Todo />
          </div>
          <div className="left">
            <Email />
            <div className="two-l">
              <Calender />
              <Weather />
            </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App;
