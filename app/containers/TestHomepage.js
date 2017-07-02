// @flow
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addCrush} from '../actions/addCrush.js'
import {getBookings, getUsers} from '../actions/tibo.js'

function viewUsers(users) {
  var rows = [];
  for (var i=0; i < users.length; i++) {
    rows.push(<h2>users.displayName</h2>);
  }
  return <div>{rows}</div>;
}

class TestHomepage extends Component {
  componentWillMount() {
    this.setState({
        users: [],
    })
  }

  render() {
    const {
      user: {
        Kemo,
        Tibo,
      },
    } = this.props;

    return (
      <div>
        <h1>testComponent</h1>
        {Kemo && <h2>{Kemo.displayName}</h2>}
        {Tibo && <h2>{Tibo.displayName}</h2>}
        <div
          onClick={()=>{ this.props.addCrush() }} >
          click me to show users
        </div>
        {viewUsers(this.state.users)}
      </div>
    );
  }
}
// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    user: state.CrushReducer,
    users: state.UsersReducer,
    booking: state.BookingReducer,
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = {
  addCrush: addCrush,
  getBookings: getBookings,
  getUsers: getUsers,
};

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(TestHomepage);
