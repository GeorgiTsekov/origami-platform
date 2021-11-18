import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input/input';
import PageLayout from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import styles from './register.module.css';
import authenticate from '../../utils/authenticate';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;

        await authenticate(
            'http://localhost:9999/api/user/register',
            { username, password },
            () => {
                console.log('Yeeey');
                this.props.history.push('/');
            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        const { username, password, rePassword } = this.state;
        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Register" />
                    <Input
                        label="Username"
                        id="username"
                        value={username}
                        onChange={(e) => this.handleChange(e, "username")}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => this.handleChange(e, "password")}
                    />
                    <Input
                        label="Re-password"
                        id="rePassword"
                        type="password"
                        value={rePassword}
                        onChange={(e) => this.handleChange(e, "rePassword")}
                    />
                    <SubmitButton title="Register" />
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage