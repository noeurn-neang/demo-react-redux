import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import ProductList from "./products/ProductList";
import { Provider } from 'react-redux';
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <Template>
        <Switch>
          <Route path="/products/:slug">
            <ProductDetail />
          </Route>
          <Route path="/" exact>
            <ProductList />
          </Route>
        </Switch>
      </Template>
    </Provider>
  );
}

export default App;
