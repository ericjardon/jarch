import React from 'react'
import NavBar from './NavBar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function MainContainer() {
    return (
        <Router>
        <main className="main-container">
            <NavBar />
            <Switch>
                <Route exact path ="/home" render={() => <p>Hello World</p>}/>
                <Route exact path ="/about" render={() => <p>About</p>}/>
                <Route exact path ="/works" render={() => <p>Works</p>}/>
                <Route exact path ="/blog" render={() => <p>Blog</p>}/>
                <Route exact path ="/stuff" render={() => <p>Stuff</p>}/>
                <Route exact path ="*" render={() => <p>What you're looking for could not be found.</p>}/>
            </Switch>
        </main>
        </Router>
    )
}
