import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Publications from './pages/publications/publications';
import RegisterPage from "./pages/register/register";
import ShareThoughtsPage from "./pages/share-thoughts/share-thoughts";
import LoginPage from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";
import ErrorPage from "./pages/error/error";
import UserContext from "./Context";

const Navigation = () => {
    const context = useContext(UserContext);
    const loggedIn = context.user ? context.user.loggedIn : false;
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Publications} />

                <Route path="/share" >
                    {loggedIn ? (<ShareThoughtsPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/register">
                    {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
                </Route>
                <Route path="/login">
                    {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
                </Route>
                <Route path="/profile/:userid">
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
                </Route>
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter >
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