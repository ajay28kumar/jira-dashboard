import { combineReducers } from "redux";
import { taskList } from "./taskList";
import { userList } from "./userList";

export default combineReducers({
    taskList,
    userList,
})