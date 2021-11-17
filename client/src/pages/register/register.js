import React, { Component } from 'react';
import SubmitButton from '../../components/button/submit-button';
import Input from '../../components/input/input';
import PageLayout from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import styles from './register.module.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    }

    render() {
        const { username, password, rePassword } = this.state;
        return (
            <PageLayout>
                <form className={styles.container}>
                    <Title title="Register" />
                    <Input
                        label="Username"
                        id="username"
                        type="username"
                        value={username}
                        onChange={(e) => this.onChange(e, "username")}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => this.onChange(e, "password")}
                    />
                    <Input
                        label="Re-password"
                        id="rePassword"
                        type="password"
                        value={rePassword}
                        onChange={(e) => this.onChange(e, "rePassword")}
                    />
                    <SubmitButton title="Register" />
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage