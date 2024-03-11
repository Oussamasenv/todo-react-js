import { useEffect, useState } from "react"


function Tasks(props){


    

    const deleteTask = (event) => {

        console.log(props.tasks);
        const delTask = event.target.parentElement.querySelector('span').innerHTML;
        console.log(delTask);
        const newTasksList = props.tasks.filter( task => task.name !== delTask )
        console.log(newTasksList);
        localStorage.setItem('tasks', JSON.stringify(newTasksList));
        // const delTask = event.target.parentElement.querySelector('span').value;
        // const newTasksList = props.tasks.filter( task => task.name !== delTask
        // )
        // console.log(delTask);
        // console.log(props.tasks);
        // console.log(newTasksList);
        // localStorage.setItem('tasks', JSON.stringify())
    }



    return (
        <>
        
            <ul>
                {
                    props.tasks.map(
                        task => (
                            <li key={task.id} className="flex justify-between items-center">
                                <span>{task.name}</span>
                                <button onClick={deleteTask} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                >delete</button>
                                
                            </li>
                    )
                    )

                }
            </ul>
    
        </>
    )
}

export default Tasks;