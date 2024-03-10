import { useEffect, useState } from "react";
import Tasks from "./Tasks";

function TodoApp(){

    const [tasks, setTasks] = useState([]);



    useEffect( () => {
        const storedTasks = localStorage.getItem('tasks');
        const getTasks = storedTasks? JSON.parse(storedTasks) : [] ;
        setTasks(getTasks)
    }, [])


    // console.log(tasks);

    const addTask = () => {

        const content = document.getElementById('content').value;
        // console.log(content)

        const newTask = {
            id: new Date().getSeconds(),
            name: content,
        }

        setTasks([...tasks, newTask]) 
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(tasks);
    }

    // const addTask = () => {
    //     const content = document.getElementById('content').value;
    //     const newTask = { name: content };
      
    //     setTasks(prevTasks => [...prevTasks, newTask]);
    //     localStorage.setItem('tasks', JSON.stringify([tasks]));
    //   };
      


    return (
        <>
        <div className=" items-center justify-center bg-white mx-60 my-20 rounded">
            <div className="py-5 px-10">
            <span>add your task here: </span>
            <input id="content" type='text' placeholder="enter a task"></input>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={addTask}
            >add</button>
            </div>
            <Tasks tasks = {tasks} />
        </div>
        
        </>
    )

}
export default TodoApp;