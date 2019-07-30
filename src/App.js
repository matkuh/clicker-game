import React, { Component } from "react";
import Container from './components/Container'
import Card from './components/Card'
import Hero from './components/Hero'
import Nav from './components/Nav'
import characters from './characters.json'
import Footer from './components/Footer'
import './App.css';



class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    cards: characters
  }

  componentDidMount() {
    this.handleCreateCards()
  }

  shuffleCards(array) {
    array.sort(() => Math.random() - 0.5);
  }


  handleCreateCards = () => {
    return this.state.cards.map((card) =>
      <Card
        image={card.image}
        name={card.name}
        key={card.id}
        onClick={this.shuffleCards(characters)}
      />
    )
  }


  render() {
    return (
      <div>
        <Nav />
        <Hero>Memory Clicker</Hero>
        <Container>
          {this.handleCreateCards()}
        </Container>
        <Footer />
      </div>
    )
  }


}
export default App;
