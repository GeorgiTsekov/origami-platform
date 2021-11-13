import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "./pages/login/login";

import Publications from './pages/publications/publications';
import RegisterPage from "./pages/register/register";
import ShareThoughtsPage from "./pages/share-thoughts/share-thoughts";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;