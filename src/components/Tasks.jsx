import { useEffect, useState } from "react"


function Tasks(props){


    const deleteTask = (event) => {

        const delTask = event.target.parentElement.querySelector('span').innerHTML;
        console.log(delTask);
        const newTasksList = props.tasks.filter( task => task.name !== delTask )
        // console.log(newTasksList);
        localStorage.setItem('tasks', JSON.stringify(newTasksList));
        props.reRender();

    }

    



    return (
        <>
        
            <ul>
                {
                    props.tasks.map(
                        task => (
                            <div className="rounded bg-green-100 ml-10 mr-10 mb-4 p-3">
                            <li key={task.id} className="flex justify-between items-center">
                                <span>{task.name}</span>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={deleteTask}
                                >delete</button>
                                
                            </li>
                            </div>
                    )
                    )

                }
            </ul>
    
        </>
    )
}

export default Tasks;