import { useEffect, useState, useRef } from "react";
import Tasks from "./Tasks";
import image from "../assets/icons8-microsoft-to-do-app-48.png"

function TodoApp(){

    const [reRund, setReRund] = useState(false);
    const [tasks, setTasks] = useState([]);

    const inpRef = useRef(null);



    useEffect( () => {
        const storedTasks = localStorage.getItem('tasks');
        const getTasks = storedTasks? JSON.parse(storedTasks) : [] ;
        setTasks( prevState => getTasks);
        console.log(getTasks)
    }, [reRund])

    // useEffect( ()=> {
    //     // console.log(tasks);
    // }, [tasks])


    const addTask = function() {

        console.log(inpRef.current.value)

        const content = inpRef.current.value;

        const newTask = {
            id: new Date().getTime(),
            name: content,
        }

        inpRef.current.blur();

        setTasks( prevTasks=> {
            const updatedTask = [...(prevTasks || [] ), newTask];
            localStorage.setItem('tasks',JSON.stringify(updatedTask));
            // console.log(tasks);
            return updatedTask
        })
    
    }


    const reRendFunc = () => {
        setReRund( reRund => !reRund)
    }

    return (
        <>
        <div className="p-2 items-center justify-center bg-white  mx-80 my-20 rounded-lg shadow-lg">
            <div className="py-5 px-10 flex flex-col">
            <div  className="flex flex-left items-center">
                <span className="font-bold text-lg inline-block mr-4">TODO App list </span>
                <img src={image} alt="image"/>
            </div>
            <div className="pt-3 flex">
            <input ref={inpRef} className="w-full hover:shadow-lg hover:border-blue-400 focus:shadow-lg focus:border-transparent focus:outline-none border border-blue-200 rounded-lg pl-5" type='text' placeholder="enter a task"
            onKeyDown={(e)=> {
                if (e.key == 'Enter') addTask();
            }

            
            }
            ></input>
            <button className="ml-2 bg-blue-500 hover:bg-blue-700 shadow-indigo-500/40 text-white font-bold py-2 px-4 rounded-full "
            onClick={addTask}
            >add</button>
            </div>
            </div>
            
                <Tasks tasks = {tasks} reRender = {reRendFunc} />
            
        </div>
        
        </>
    )

}
export default TodoApp;