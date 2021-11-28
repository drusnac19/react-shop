import { BrowserRouter, Route } from "react-router-dom";
import { Switch, Redirect, useRouteMatch } from "react-router";

//pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";

import Page404 from "./pages/Errors/Page404";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {}
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/home'>
                    <Redirect to='/' />
                </Route>
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route exact path='/products/:productSlug' exact>
                    <Products />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route>
                    <Page404 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
