import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import tasks from '../../mockData/tasks';
import TaskLists  from './TaskLists';

export const TaskContainer = ({ type, id }) => {
  const taskList = tasks.filter((task) => task.status === id);
  return (
    <div>
      <h3>{type}</h3>
      <Droppable key={id} droppableId={id}>
      {(provided) => (
       <TaskLists {...provided.droppableProps}
          ref={provided.innerRef}
          taskList={taskList}
        />
      )}
      </Droppable>
    </div>
  );
}