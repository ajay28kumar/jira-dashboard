import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div className='task-card'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
}