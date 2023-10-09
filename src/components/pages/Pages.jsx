import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Gallery from "../gallery/Gallery"
import Events from '../events/Events'
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SignIn from "../login/Login"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={SignIn} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
