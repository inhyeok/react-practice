import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface TaskProp {}
interface TaskState {}

export default class Task extends React.Component<TaskProp, TaskState> {
  constructor(props: TaskProp) {
    super(props);
    this.state = {}
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>TASK Page</h1>
        <Link to={`/`}>Main</Link>
        <br></br>
        <Link to={`/task/1`}>Task1</Link>
        <br></br>
        <Link to={`/task/2`}>Task2</Link>
        <Outlet />
      </>
    );
  }
}