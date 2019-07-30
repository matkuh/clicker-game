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
    cards: this.handleShuffleCards(),
    clickedCards: []
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
    return shuffleCards;
  }

  handleCreateCards = () => {
    return this.state.cards.map((card) =>
      <Card
        image={card.image}
        name={card.name}
        key={card.id}
        id={card.id}
        cardClick={this.handleClickedCards}
      />
    )
  }

  handleClickedCards = (id) => {
    if (this.state.clickedCards.includes(id)){
      this.setState({
        score: 0,
        clickedCards: []
      })
      return
    } else {
      this.setState({
        score: this.state.score +1,
        clickedCards: this.state.clickedCards.push([id])
      })
      if(this.state.score + 1 === 12){
        this.setState({
          score: 0,
          highScore: this.state.score + 1,
          clickedCards: []
        })
      }
      else if (this.state.score + 1 > this.state.highScore){
        this.setState({
          highScore: this.state.score + 1})
      }

    }
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore}/>
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
