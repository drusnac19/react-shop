import { BrowserRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";

//pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

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
                <Route exact path='/products/:categorySlug'>
                    <Products />
                </Route>
                <Route exact path='/product/:productSlug'>
                    <Product />
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
