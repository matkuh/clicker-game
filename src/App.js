import React, { Component } from "react";
import Wrapper from './components/Wrapper'
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
      <Wrapper>
        <Nav />
        <Hero>Memory Clicker</Hero>
        <Card>

        </Card>
      </Wrapper>
    )
  }


}
export default App;
