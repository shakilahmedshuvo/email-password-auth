import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterRBS = () => {
    // submit function
    const handleRegister = event => {
        // for reload stop
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
    }
    return (
        <div className='w-50 mx-auto'>
            <h4
                className='text-primary'>
                Please Register !!!
            </h4>
            <Form
                onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Email address
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group
                    className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name='password'
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Accept Terms and Conditions" />
                </Form.Group>
                {/* submit btn */}
                <Button
                    variant="primary"
                    type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterRBS;