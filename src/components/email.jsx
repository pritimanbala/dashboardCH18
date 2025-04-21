import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";

function Email() {
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
  return (
    <div className='one-l'>
       
              
              <h1 className="sml-1">
                Recent Emails
              </h1>
              {emails.map((email) => (
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className='email' key={email.id} >
                  <BsFillPersonFill size={30} />
                    <p className='sml-3'>{email.from}</p>
                    <p>{email.subject}</p>
                    <p>{email.time}</p>
                </motion.div>
              ))}
         
    </div>
  )
}

export default Email
