import React from "react";
import { connect } from "react-redux";

const AssigneeList = ({assignees, setSelectedUser}) => {
  return (
    <div>
      <h2>Assignee List</h2>
      <ul>
        {assignees.map((assignee, index) => (
          <li key={index}>{assignee.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    assignees: state.userList
  }
}
export default connect(mapStateToProps)(AssigneeList);