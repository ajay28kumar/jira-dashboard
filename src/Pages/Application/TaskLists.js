import { TaskCard } from './TaskCard';

const TaskLists = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task, index) => (
        <TaskCard key={task.status} task={task} index={index}/>
      ))}
    </div>
  )
}

export default TaskLists;