import React, { Component } from "react";
import Container from './components/Container'
import Card from './components/Card'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Characters from './characters.json'
import Footer from './components/Footer'
import './App.css';


class App extends Component {
  state = {

  }




  render() {
    return (
      <div>
        <Nav />
        <Hero>Memory Clicker</Hero>
        <Container>
          <Card>
          </Card>
        </Container>
        <Footer />
      </div>
    )
  }


}
export default App;
