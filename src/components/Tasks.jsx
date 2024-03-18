
function Tasks(props){



    // const deleteTask = function {
    //     return (
    //         function(id){
    //             const newTasksList = props.tasks.filter(task => task.id != id);

    //         }

    //     )

    // }

    function deleteTask(id) {

        // const delTask = event.target.parentElement.querySelector('span').innerHTML;
        // console.log(delTask);
        // const newTasksList = props.tasks.filter( task => task.id !== id )
        // console.log(newTasksList);
        // localStorage.setItem('tasks', JSON.stringify(newTasksList));
        // props.reRender();
        const newTasksList = props.tasks.filter(task => task.id != id);
        console.log(newTasksList);
        localStorage.setItem("tasks", JSON.stringify(newTasksList));
        console.log(id);
        props.reRender();
    }

    



    return (
        <>
        
            <ul>
                {
                    props.tasks.map(
                        task => (
                            <div key={task.id} className="rounded bg-green-100 ml-10 mr-10 mb-4 p-3">
                            <li key={task.id} className="flex justify-between items-center">
                                <span>{task.name}</span>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => { deleteTask(task.id) }}
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