import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store";
import { TaskSlice } from "store/reducers/task-reducer";
import TaskAddForm from "./task-add-form";

export default function TaskList() {
  const taskList = useSelector((state: RootState) => state.task.taskList);
  const dispatch = useDispatch();
  const removeTask = (index: number) => {
    console.log('removeTask', index);
    // dispatch({ type: "taskSlice/remove", payload: index });
    dispatch(TaskSlice.actions.remove(index));
    
  }

  return (
    <div>
      <TaskAddForm />
      <ul>
        {
          taskList.map((item, index) =>
            <div key={item.id}>
              <button type="button" onClick={() => { removeTask(index) }}>-</button>
              <li>
                <Link to={`/task/${item.id}`}>{item.id} | {item.title} | {item.description}</Link>
              </li>
            </div>
          )
        }
      </ul>
    </div>
  );
}