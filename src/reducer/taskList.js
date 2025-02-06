import dummyTaskList from '../mockData/tasks';

export const taskList = (state = dummyTaskList, action) => {
  switch (action.type) {
    case 'DRAG_TASK':
      const { source, destination } = action.payload;
      const task = state.find((task) => task.id === source.droppableId);
      const taskList = state.filter((task) => task.id !== source.droppableId);
      const newTask = {
        ...task,
        status: destination.droppableId,
      };
      return [...taskList, newTask];
    default:
      return state;
  } 
}