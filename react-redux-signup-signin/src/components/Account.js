import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import AuthUserContext from './AuthUserContext';
import {PasswordForgetForm} from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = ({authUser})=>
 // <AuthUserContext.Consumer>
    //{authUser=>
      <div>
        <h1>Account: {authUser.email}</h1>
      
        <PasswordChangeForm/>
      </div>
    //}
  //</AuthUserContext.Consumer>
const mapStateToProps = (state)=>({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser)=> !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);