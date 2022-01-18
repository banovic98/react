import Task from './Task';

function Taskovi({ tasks, onDelete }) {

    return (
        <div>
            {tasks.map((task) => (
                <Task onDelete={onDelete} key={task.id} task={task} />
            ))
            }
        </div>
    )
}

export default Taskovi;