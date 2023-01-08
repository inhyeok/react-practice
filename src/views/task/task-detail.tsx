import React from 'react';
import { useParams } from 'react-router-dom';

interface TaskDetailProp{
}

interface TaskDetailState {
}

export default function TaskDetail() {
  const { taskId } = useParams();
  return (
    <>
      <h1>TASK Detail {taskId}</h1>
    </>
  );
}
