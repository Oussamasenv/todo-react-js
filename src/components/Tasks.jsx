import { useEffect, useState } from "react"


function Tasks(props){


    console.log(props.tasks);



    return (
        <>
        <div className=" m-10 rounded bg-green-100">
            <ul>
                {
                    props.tasks.map(
                        task => (
                            <li key={task.id}><span>{task.name}<button>delete</button></span></li>
                    )
                    )

                }
            </ul>
        </div>
        </>
    )
}

export default Tasks;