import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login(){
    return (
        <div class="text-center">
            <h2>Login</h2>

            <Form class="w-75 border border-dark rounded p-4 mx-auto">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link to="/home">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Login;