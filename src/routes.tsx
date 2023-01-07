import {
  createBrowserRouter,
} from 'react-router-dom';
import NotFound from 'views/not-found';
import Task from 'views/task/task';
import TaskDetail from 'views/task/task-detail';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App propAbc='Eden Practice' />,
    errorElement: <NotFound />
  },
  {
    path: '/task',
    element: <Task />,
    children: [{
      path: ':taskId',
      element: <TaskDetail />,
    }]
  },
]);

export { router };
