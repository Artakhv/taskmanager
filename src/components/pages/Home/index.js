import React, { Component } from "react";

import { connect } from "react-redux";
import { getTasksActions } from "../../../actions/getTasksActions";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   Col,
//   Container,
//   Jumbotron,
//   Row
// } from "reactstrap";

class Home extends Component {
  componentDidMount() {
    this.props.getTasksActions();
  }
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gettasks: state.getTasksReducer.taskData.tasks
  };
};
export default connect(
  mapStateToProps,
  { getTasksActions }
)(Home);
