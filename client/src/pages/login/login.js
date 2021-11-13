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
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;

        this.setState(newState);
    }

    render() {
        const { email, password } = this.state;
        return (
            <PageLayout>
                <form className={styles.container}>
                    <Title title="Login" />
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
                        <SubmitButton title="Login" />
                    </form>
                </form>
            </PageLayout>
        )
    }
}

export default LoginPage;