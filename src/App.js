import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
    return (
        <Router>
            <Switch>
                
                <Route exact path = "/login" component = {Login} />
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}
export default App;