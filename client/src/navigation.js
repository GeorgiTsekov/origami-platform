import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Publications from './pages/publications/publications';
import RegisterPage from "./pages/register/register";
import ShareThoughtsPage from "./pages/share-thoughts/share-thoughts";
import LoginPage from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";
import ErrorPage from "./pages/error/error";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;

// const LazyPublications = React.lazy(() => import('./pages/publications/publications'));
// const LazyShareThoughtsPage = React.lazy(() => import("./pages/share-thoughts/share-thoughts"));
// const LazyRegisterPage = React.lazy(() => import("./pages/register/register"));
// const LazyLoginPage = React.lazy(() => import("./pages/login/login"));
// const LazyProfilePage = React.lazy(() => import("./pages/profile/profile"));
// const LazyErrorPage = React.lazy(() => import("./pages/error/error"));
// const LazyNavigation = () => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Suspense fallback={<h1>Loading...</h1>}>
//                     <Route exact path="/" component={LazyPublications} />
//                     <Route path="/share" component={LazyShareThoughtsPage} />
//                     <Route path="/register" component={LazyRegisterPage} />
//                     <Route path="/login" component={LazyLoginPage} />
//                     <Route path="/profile/:userid" component={LazyProfilePage} />
//                     <Route component={LazyErrorPage} />
//                 </Suspense>
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default LazyNavigation;