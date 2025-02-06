import { TaskCard } from './TaskCard';

const TaskLists = ({ taskList, provided }) => {
  return (
    <div ref={provided.innerRef} {...provided.droppableProps}>
      {taskList.map((task, index) => (
        <TaskCard key={task.id} task={task} index={index} />
      ))}
      {provided.placeholder}
    </div>
  )
}

export default TaskLists;