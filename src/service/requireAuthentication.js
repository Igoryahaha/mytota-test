import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTING } from '../actions/user';

export default function requireAuthentication(Component) {
    const AuthenticatedComponent = ({ ...props }) => (
        <div>
            {props.user.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )}
        </div>
    );

    function mapStateToProps(state) {
        return {
            user: state.user
        };
    }

    return connect(mapStateToProps)(AuthenticatedComponent);
}
