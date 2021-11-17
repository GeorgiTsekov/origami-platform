import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input/input';
import PageLayout from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import styles from './login.module.css';

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
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

        try {
            const promise = await fetch('http://localhost:9999/api/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const authToken = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${authToken}`;
            const response = await promise.json();

            if (response.username && authToken) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { username, password } = this.state;
        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Login" />
                    <Input
                        value={username}
                        onChange={(e) => this.handleChange(e, "username")}
                        label="Username"
                        id="username"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => this.handleChange(e, "password")}
                        label="Password"
                        id="password"
                    />
                    <SubmitButton title="Login" />
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage;