// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCrush } from '../actions/addCrush.js'
import { fetchUsers } from '../actions/users.js'
// import {getBookings, getUsers} from '../actions/tibo.js'

function viewUsers(users) {
  console.log('viewUsers')
  var rows = [];
  for (var i=0; i < users.length; i++) {
    rows.push(<h2 key={i}>{users[i].displayName}</h2>);
  }
  console.log(rows, "rows")
  console.log(users, "users")
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
        <div
          onClick={()=>{ this.props.fetchUsers() }} >
          click me to FETCH YASTAA users
        </div>
        {viewUsers(this.props.users)}
      </div>
    );
  }
}
// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    user: state.CrushReducer,
    users: state.UserReducer,
    // booking: state.BookingReducer,
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = {
  addCrush: addCrush,
  // getBookings: getBookings,
  fetchUsers: fetchUsers,
};

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(TestHomepage);
