import TaskList from 'components/task-list/task-list';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface TaskProp {}
interface TaskState {}

const Task = (props: TaskProp): JSX.Element => {
  return (
    <>
      <Link to={`/`}>Main</Link>
      <h1>TASK Page</h1>
      <TaskList />
      <Outlet />
    </>
  );
};

export default Task;
