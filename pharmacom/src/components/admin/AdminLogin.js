import React, { Component } from 'react';
import {
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    FormFeedback,
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import './UserLogin.css';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.handleClickUserLogin = this.handleClickUserLogin.bind(this);
        this.state = {

            userName: '',
            password: '',

            validate: {
                userNameState: '',
                password: '',
                invalidMessage: '',

            },
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleClickUserLogin() {
        this.props.history.push('/');
    };

    handleChange = async (event) => {
        this.state.validate.invalidMessage = '';
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    };

    submitForm(e) {
        const { name, value } = e.target;
        const { validate } = this.state
        var { password } = this.state
        e.preventDefault();

        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({ userName: this.state.userName, password: this.state.password })
        }).then((res) => res.json())
            .catch((err) => {
                this.state.validate.invalidMessage = "Invalid Username or Password";
                // validate.userNameState = 'has-danger'
                // validate.password ='has-danger'
                password = '';
                this.setState({ password })
                this.setState({ validate })

                console.log(`
                        error
                       `)
                this.setState({ [name]: value }, () => console.log(this.state));
            });
    };

    render() {
        return (
            <div className="wrapper-login" >
                <div  className="logIn" >
                    <h2 > Log In </h2>
                    {
                        this.state.validate.invalidMessage.length > 0 && (<span className="error"> {this.state.validate.invalidMessage} </span>)
                    }
                    <Form className="form"
                        onSubmit={
                            (e) => this.submitForm(e)} >
                        <Col className="col" >
                            <FormGroup >
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" >
                                        <span className="input-group-text" >
                                            < FontAwesomeIcon icon={faUser} />
                                        </span >
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        placeholder="Username"
                                        value={this.state.userName}
                                        invalid={this.state.validate.userNameState === 'has-danger'}
                                        onChange={
                                            (e) => {
                                                this.handleChange(e)
                                            }
                                        }
                                    />
                                </InputGroup>
                            </FormGroup>
                        </Col>

                        <Col >
                            <FormGroup >
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend" >
                                        <span className="input-group-text" >
                                            < FontAwesomeIcon icon={faLock} />
                                        </span >
                                    </InputGroupAddon>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        invalid={this.state.validate.password === 'has-danger'}
                                        onChange={
                                            (e) => {
                                                this.handleChange(e)
                                            }
                                        }
                                    />
                                </InputGroup>
                            </FormGroup>
                        </Col>

                        <Col >
                            < Button
                                color="danger"
                                size="lg"
                                block
                            >
                                Log In
                        </Button>
                        </Col >
                    </Form>
                    <Button color="link" block> Forgot password?</Button>
                    <div className="to-signup">
                        <p>user?</p>
                        <Button color="link" onClick={this.handleClickUserLogin}> Login as user</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLogin;