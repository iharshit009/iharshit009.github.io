import React, { Component } from 'react';
import Timelinen from './timeline'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'
import { Router } from "@reach/router";

function TimelineAuth() {
    const user = null;
    return (
        user ?
            <Timelinen />
            :
            <Router>
                <SignUp path="signUp" />
                <SignIn path="/" />
                <PasswordReset path="passwordReset" />
            </Router>


    );
}
export default TimelineAuth;