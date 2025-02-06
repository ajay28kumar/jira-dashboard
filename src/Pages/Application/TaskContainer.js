import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import tasks from '../../mockData/tasks';
import TaskLists from './TaskLists';

export const TaskContainer = ({ type, id }) => {
  const taskList = tasks.filter((task) => task.status === id);
  return (
    <div>
      <h3>{type}</h3>
      <Droppable key={id} droppableId={id.toString()}
        isDropDisabled={false} isCombineEnabled={false} ignoreContainerClipping={false}>
        {(provided) => (
          <TaskLists taskList={taskList} provided={provided} />
        )}
      </Droppable>

    </div>
  );
}