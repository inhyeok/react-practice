import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "store";
import { TaskSlice, TaskItem } from "store/reducers/task-reducer";

interface FormData extends EventTarget {
  title: { value: string };
  description: { value: string };
}

export default function TaskAddForm() {
  const taskList = useSelector((state: RootState) => state.task.taskList);
  const dispatch = useDispatch();
  
  const addTask = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as FormData;
    const id = (taskList[taskList.length - 1]?.id || 0) + 1
    const task: TaskItem = {
      id,
      title: target.title.value,
      description: target.description.value,
    };
    console.log('addTask', task);
    // dispatch({ type: "taskSlice/remove", payload: index });
    dispatch(TaskSlice.actions.add(task));

    
  }
  return (
    <>
      <form onSubmit={addTask}>
        <input type="text" id="title" name="title" />
        <textarea id="description" name="description"></textarea>
        <button type="submit">추가</button>
      </form>
    </>
  );
}