import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import image from "../assets/icons8-microsoft-to-do-app-48.png"

function TodoApp(){

    const [tasks, setTasks] = useState([]);



    useEffect( () => {
        const storedTasks = localStorage.getItem('tasks');
        const getTasks = storedTasks? JSON.parse(storedTasks) : [] ;
        setTasks(getTasks)
        console.log(tasks)
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
        <div className="p-2 items-center justify-center bg-white  mx-80 my-20 rounded-lg shadow-lg">
            <div className="py-5 px-10 flex flex-col">
            <div  className="flex flex-left items-center">
                <span className="font-bold text-lg inline-block mr-4">TODO App list </span>
                <img src={image} alt="image"/>
            </div>
            <div className="pt-3 flex">
            <input className="w-full" id="content" type='text' placeholder="enter a task"></input>
            <button className="bg-blue-500 hover:bg-blue-700 shadow-indigo-500/40 text-white font-bold py-2 px-4 rounded-full "
            onClick={addTask}
            >add</button>
            </div>
            </div>
            <div className="rounded bg-green-100 m-10 p-3">
                <Tasks tasks = {tasks} />
            </div>
        </div>
        
        </>
    )

}
export default TodoApp;