import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import NavBar from "./NavBar";
import ProductDetails from "./ProductDetails";
import routes from "../config/routes";
const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component {...props} {...route.props} />
                )}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      {/* <Cart /> */}
      {/* <NavBar /> */}
      {/* <ProductDetails /> */}
    </div>
  );
};

export default App;
