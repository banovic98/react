import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: '1',
        text: 'Doctors App',
        day: 'Jan 9th at 2:00pm',
        reminder: true,
      },
      {
        id: '2',
        text: 'meeting',
        day: 'Jan 10th at 2:00pm',
        reminder: true,
      },
      {
        id: '3',
        text: 'React App',
        day: 'Jan 11th at 2:00pm',
        reminder: true,
      }

    ]
  )

  // add task

  const addTask = (task) => {
   console.log(task);
  }

  // delete tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <Header title='Task tracker' />
      <AddTask onAdd={addTask} />
      {tasks.lenght > 0 ? <Tasks onDelete={deleteTask} tasks={tasks} /> : 'No task to show'}
    </div>
  );
}

export default App;
