import React from "react";
import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Book from "./books/Book";
import Character from "./Characters/Character";
import Houses from "./houses/House";
import Pagination from "@material-ui/lab/Pagination";

function App() {
    return (
        <Router>
            <Navbar />
            <Pagination count={3} />
            <Switch>
            <Route path='/Book' component={Book} />
            <Route path='/Character' component={Character} />
            <Route path='/Houses' component={Houses} />
            </Switch>
        </Router>
    )
}
export default App;