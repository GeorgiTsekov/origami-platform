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
            email: "",
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
        const { email, password, rePassword } = this.state;
        return (
            <PageLayout>
                <form className={styles.container}>
                    <Title title="Register" />
                    <form>
                        <Input
                            label="Email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => this.onChange(e, "email")}
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
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage