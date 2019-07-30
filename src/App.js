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
    clicked: false,
    cards: this.handleShuffleCards()
  }

  componentDidMount() {
    this.handleCreateCards()
  }

  handleShuffleCards() {
    const newCards = characters.slice()
    const shuffleCards = [];
    while (newCards.length > 0) {
      shuffleCards.push(newCards.splice(Math.floor(Math.random() * newCards.length), 1)[0]);
    }
    return shuffleCards
  }

  handleCreateCards = () => {
    return this.state.cards.map((card) =>
      <Card
        image={card.image}
        name={card.name}
        key={card.id}
        onClick={this.handleShuffleCards()}
      />
    )
  }


  render() {
    return (
      <div>
        <Nav />
        <Hero>Memory Clicker</Hero>
        <Container>
          <div className="row">
            {this.handleCreateCards()}
          </div>
        </Container>
        <Footer />
      </div>
    )
  }


}
export default App;
