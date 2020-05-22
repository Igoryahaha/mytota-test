import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { logout } from '../../actions/user';

const Header = ({ name, logout }) => {
    const onClick = () => {
        logout();
    };

    return (
        <Fragment>
            <h2 className="h3">{name}</h2>
            <Link to="/login" onClick={onClick}>
                <Button color="primary" type="submit">
                    Log Out
                </Button>
            </Link>
            <hr />
        </Fragment>
    );
};

Header.propTypes = {
    name: PropTypes.string.isRequired
};
const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    logout: (payload) => dispatch(logout(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
