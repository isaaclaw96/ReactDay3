import Login from "./containers/login";
import Dashboard from "./containers/dashbboard";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Details from "./containers/dashbboard/Details";
import CreateProduct from "./containers/createProduct";



function App() {
  return (
    <Router className="App">
    <Header />  
    <Switch>        

      <Route path="/create" component={CreateProduct} />
      <Route path="/dashboard/:id" component={Details}/>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={Login} /> 

    </Switch>
      
      
    </Router>
  );
}

export default App;
