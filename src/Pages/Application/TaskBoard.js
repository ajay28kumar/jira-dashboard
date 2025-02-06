import React from 'react';
import columnList from '../../mockData/columnList';
import { TaskContainer } from './TaskContainer';
import { DragDropContext } from 'react-beautiful-dnd';

export const TaskBoard = () => {
  const handleDragEnd = (result) => {
    console.log("handleDragEnd :", result);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='task-board'>
        {columnList.map((column) => (
          <div key={column.id} style={{ width: '100%',margin: "0 5px" }}>
            <TaskContainer type={column.type} id={column.id}/>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}