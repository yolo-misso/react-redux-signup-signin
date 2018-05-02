import React, { Component } from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    const {onSetUsers} = this.props;

    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const {users} = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
      
        {!!users && <UserList users={users}/>}
      </div>
    );
  }
}

const UserList = ({users})=>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>
  
    {Object.keys(users).map(key=>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

/*redux content*/
const mapStateToProps = (state)=>({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch)=>({
  onceGetUsers: (users)=> dispatch({type: 'USERS_SET', users}),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
connect(mapStateToProps, mapDispatchToProps))(HomePage);