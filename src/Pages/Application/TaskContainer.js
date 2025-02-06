import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import TaskLists from './TaskLists';

const TaskContainer = ({ type, id, tasks }) => {
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

const mapStateToProps = (state) => {
  console.log("state.tasks :", state);
  return {
    tasks: state.taskList
  }
}


export default connect(mapStateToProps)(TaskContainer);
