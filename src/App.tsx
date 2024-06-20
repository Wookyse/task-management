import { /*useEffect,*/ useState } from 'react';
//import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { AddTask } from './components/AddTask/AddTask';
import { TaskDetails } from './components/TaskDetails/TaskDetails';

import './App.css';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: ' 1',
      title: 'Estudar programção',
      completed: true,
    },
    {
      id: '2',
      title: 'Clique aqui',
      completed: false,
    },
  ]);

  /*  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await  axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
        );
        setTasks(data)
    };
    fetchTasks();
  }, [])*/

  const handleTaskClick = (taskId: string) => {
    const newTaks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTaks);
  };

  const handleTaskAddition = (taskTitle: string) => {
    const newTasks: Task[] = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </div>
            }
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
