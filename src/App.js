import React, { Component } from "react";
import Container from './components/Container'
import Card from './components/Card'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';


class App extends Component {
  state = {
    celebs
  }

  shuffleCards = id => {
    const celebs = this.state.celebs.map(celeb => celeb.id !== id);
    this.setState({ celebs })
  }


  render() {
    return (
      <Container>
        <Nav />
        <Hero>Memory Clicker</Hero>
        <Card>

        </Card>
      </Container>
    )
  }


}
export default App;
