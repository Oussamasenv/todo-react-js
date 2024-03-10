import { useEffect, useState } from "react"


function Tasks(props){


    console.log(props.tasks);



    return (
        <>
        
            <ul>
                {
                    props.tasks.map(
                        task => (
                            <li key={task.id} className="flex justify-between items-center">
                                
                                <span>{task.name}</span>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">delete</button>
                                
                            </li>
                    )
                    )

                }
            </ul>
    
        </>
    )
}

export default Tasks;