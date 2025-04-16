import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { CiWallet } from "react-icons/ci";
import { BsSpeedometer } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";


function App() {
  const todo = [{
    id: 1,
    title: "Buy groceries",
    completed: false,
    icon : MdLocalGroceryStore,
    time : "Today at 2:00 PM",
  },
  {
    id: 2,
    title: "Do laundry",
    completed: false,
    icon : MdLocalLaundryService,
    time : "Today at 3:00 PM",
  },
  {
    id: 3,
    title: "Finish project",
    completed: false,
    icon : FaFileAlt,
    time : "Today at 4:00 PM",
  },
  {
    id: 4,
    title: "Go to the gym",
    completed: false,
    icon : CgGym,
    time : "Today at 5:00 PM",
  },]

  const emails = [{
    id: 1,
    from : "John Doe",
    subject : "Meeting Reminder",
    time : "2:00 PM",
  },
  {
    id: 2,
    from : "Jane Smith",
    subject : "Project Update",
    time : "3:00 PM",
  },
  {
    id: 3,
    from : "Bob Johnson",
    subject : "Invoice Due",
    time : "4:00 PM",
  },
  {
    id: 4,
    from : "Alice Brown",
    subject : "New Feature Request",
    time : "5:00 PM",
  },]
  const list = [["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], [1, 2, 3, 4, 5, 6, 7],[ 8, 9, 10,
    11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, "NA", "NA", "NA", "NA"]];
  
  
  return (
    <>
    <div className='main'>
      <Navbar />
        <div className='outmain'>
          <div className="right">
            <div className='one'>
              <div className="one-right">
                <CiWallet size={50} />
                <p style={{fontSize: "1rem", whiteSpace: "nowrap"}}>Your Bank Balance</p>
                <p style={{fontSize:"1.5rem", fontWeight: '500'}}>$123,456</p>
              </div>
              <div className="one-left">
                <BsSpeedometer size={50} />
                <p>Expenditure Average</p>
                <p style={{fontSize:"1.5rem", fontWeight: '500', color:"#a60b32"}}>High</p>
              </div>
            </div>
            <div className="two">
              <h1 className="sml-1">
                To Do List
              </h1>
              <div className="task-grid">
                {todo.map((task) => (
                  <div className='task' key={{task}.id}>
                    <task.icon className='icon' color='white' size={70} style={{padding: "1rem", borderRadius: "15px" , backgroundColor: 'black'}}/>
                    <div className="mid">
                      <p className='sml-2'>{task.title}</p>
                      <p>{task.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="left">
            <div className="one-l">
              
                <h1 className="sml-1">
                  Recent Emails
                </h1>
                {emails.map((email) => (
                  <div className='email' key={email.id} >
                    <BsFillPersonFill size={30} />
                      <p className='sml-3'>{email.from}</p>
                      <p>{email.subject}</p>
                      <p>{email.time}</p>
                  </div>
                ))}
            </div>
            <div className="two-l">
              <div className="two-cal">
                <h1 className='cal-h1'>
                  April
                </h1>
                <div className="calender">
                  {list.map((item) => 
                    ( 
                    <div className='calender-item' key={item}>
                      {item.map((values) => (
                       (<p style={{color: values === "NA" ? "transparent" : values === 25 ? "black" : "white", padding: "10px" , backgroundColor : values === 25 ? "white" : "transparent", borderRadius: "999px"}} className = "calender-item" key={values}>{values}</p>)
                      ))}
                    </div>
                    )
                  )}
                </div> 
              </div>
              <div className='two-wth'>
                <h1 className='wth-h1'>
                  Chennai
                </h1>
                <p className="wth-p">
                  Cloudy 298K
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default App;
