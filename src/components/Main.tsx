import React from 'react'
import NavBar from './NavBar'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Index from './pages/Index'
import Home from './pages/Home'

export default function Main() {

    const pages = ['home', 'works', 'blog', 'stuff', 'cv']

    return (
        <Router>
        <main className="main-container">
            <NavBar pages={pages} />
            <Switch>
                <Route exact path ="/">
                    <Redirect to="/jarch/"/>
                </Route>
                <Route exact path ="/jarch/home" render={() => <Home/>}/>
                <Route exact path ="/jarch" render={() => <Index/>}/>
                <Route exact path ="/jarch/works" render={() => <p>Works</p>}/>
                <Route exact path ="/jarch/blog" render={() => <p>Blog</p>}/>
                <Route exact path ="/jarch/stuff" render={() => <p>Stuff</p>}/>
                <Route exact path ="/jarch/cv" render={() => <p>CV</p>}/>
                <Route exact path ="*" render={() => <p>What you're looking for could not be found.</p>}/>
            </Switch>
        </main>
        </Router>
    )
}
