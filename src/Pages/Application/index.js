import React from "react";
import { TaskBoard } from "./TaskBoard";
import AssigneeList from "./AssigneeList";
const Application = () => {
  const [selectedUser, setSelectedUser] = React.useState("");
  return (
    <div>
      <AssigneeList setSelectedUser={setSelectedUser}/>
      <TaskBoard selectedUser={selectedUser}/>
    </div>
  );
};

export default Application;