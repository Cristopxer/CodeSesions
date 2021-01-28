import "./App.css";
import Layout from "./containers/Layout/Layout";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/" exact component={Dashboard} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
