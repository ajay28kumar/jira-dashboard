import { Draggable } from "react-beautiful-dnd";
import userLists from "../../mockData/userList";

export const TaskCard = ({ task, index }) => {
  const userData = userLists.find((user) => user.id === task.assignee);
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div className={`task-card ${snapshot.isDragging ? 'dragging' : ''}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-meta">
          <span>🔵 {task.status}</span>
          <div className="assignee">
            <img src={userData.avatar} alt={userData.assignee} className="avatar"/>
            {userData.name.charAt(0).toUpperCase()}
          </div>
        </div>
        </div>
      )}
    </Draggable>
  );
}