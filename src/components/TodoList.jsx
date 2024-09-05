
import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      setTasks(newTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      setTasks(newTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder='Enter Task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>Add Task</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button onClick={() => deleteTask(index)} className='delete-button'>Delete</button>
            <button onClick={() => moveTaskUp(index)} className='move-button'>☝️</button>
            <button onClick={() => moveTaskDown(index)} className='down-button'>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}




// import React, { useState } from 'react';

// export default function TodoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   function handleInputChange(event) {
//     setNewTask(event.target.value);
//   }

//   function addTask() {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask('');
//     }
//   }

//   function deleteTask(index) {
//     setTasks(tasks.filter((_, i) => i !== index));
//   }

//   function moveTaskUp(index) {
//     if (index > 0) {
//       const newTasks = [...tasks];
//       [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
//       setTasks(newTasks);
//     }
//   }

//   function moveTaskDown(index) {
//     if (index < tasks.length - 1) {
//       const newTasks = [...tasks];
//       [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
//       setTasks(newTasks);
//     }
//   }

//   return (
//     <div className='to-do-list'>
//       <h1>To-Do List</h1>

//       <div>
//         <input
//           type="text"
//           placeholder='Enter Task...'
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button className='add-button' onClick={addTask}>Add Task</button>
//       </div>

//       <ol>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <span className='text'>{task}</span>
//             <button onClick={() => deleteTask(index)} className='delete-button'>Delete</button>
//             <button onClick={() => moveTaskUp(index)} className='move-button'>☝️</button>
//             <button onClick={() => moveTaskDown(index)} className='down-button'>👇</button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }










