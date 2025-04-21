import React from 'react'
import { MdLocalGroceryStore } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { motion } from "framer-motion";

function Todo() {
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
  return (
    <div className='two'>
        <h1 className="sml-1">
        To Do List
        </h1>
        <div className="task-grid">
          
            {todo.map((task) => (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className='task' key={{task}.id}>
                <task.icon className='icon' color='white' size={40} style={{padding: "1rem", borderRadius: "15px" , backgroundColor: 'black'}}/>
                <div className="mid">
                    <p className='sml-2'>{task.title}</p>
                    <p>{task.time}</p>
                </div>
                </div>
            </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Todo
