import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Publications from './pages/publications/publications';
import ShareThoughtsPage from "./pages/share-thoughts/share-thoughts";

const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;