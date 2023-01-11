import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskItem {
  id: number;
  title: string;
  description: string;
}

interface TaskState {
  taskList: TaskItem[];
}

export const TaskSlice = createSlice({
  name: 'TaskSlice',
  reducers: {
    add: (state: TaskState, action: PayloadAction<TaskItem>) => {
      state.taskList.push(action.payload);
    },
    remove: (state: TaskState, action: PayloadAction<number>) => {
      state.taskList.splice(action.payload, 1);
    },
  },
  initialState: {
    taskList: [] as TaskItem[],
  }
});

export default TaskSlice.reducer;
