import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import { login } from '../../actions/user';
import { useHistory } from 'react-router-dom';

function LoginPage({ login, isAuthenticated }) {
    const history = useHistory();
    const [user, setUser] = useState({ login: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    };

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
    });

    return (
        <Container>
            <Col md={{ size: 4, offset: 4 }}>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Login</Label>
                        <Input
                            type="text"
                            name="login"
                            onChange={onChange}
                            placeholder="Enter login"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            onChange={onChange}
                            placeholder="Password"
                        />
                    </FormGroup>
                    <Button color="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Col>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    login: (payload) => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
