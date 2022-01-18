import { useState } from 'react';



function AddTask({ onAdd }) {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert('Please add task');
            return;
        }
        onAdd({ text, day });

        setText('');
        setDay('');
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & time</label>
                <input type="text" placeholder='Day & time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <input type="submit" value="Save task" />
        </form>
    )
}

export default AddTask;