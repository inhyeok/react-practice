import React from 'react';

interface TaskDetailProp{
}

interface TaskDetailState {
  taskId?: number;
}

export default class TaskDetail extends React.Component<TaskDetailProp, TaskDetailState> {
  constructor(props: TaskDetailProp) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>TASK Detail Page</h1>
      </>
    );
  }
}
