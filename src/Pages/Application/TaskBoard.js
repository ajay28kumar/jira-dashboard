import React from 'react';
import columnList from '../../mockData/columnList';
import TaskContainer from './TaskContainer';
import { DragDropContext, } from "react-beautiful-dnd";

export const TaskBoard = ({selectedUser}) => {
  const handleDragEnd = (result) => {
    console.log("handleDragEnd :", result);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="task-board">
        {columnList.map((column) => (
          <TaskContainer key={column.id} type={column.type} id={column.id} selectedUser={selectedUser} />
        ))}
      </div>
    </DragDropContext>
  );
};