import React from 'react';
import { useParams } from 'react-router-dom';

interface TaskDetailProp {}

// interface TaskDetailState {}

const TaskDetail = (props: TaskDetailProp): JSX.Element => {
  const { taskId } = useParams();
  return (
    <>
      <h1>TASK Detail {taskId}</h1>
    </>
  );
};

export default TaskDetail;
