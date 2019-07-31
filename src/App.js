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

    characters,
  }


  handleClickedCards = (id) => {
    this.state.characters.find((ca, i) => {
      if (ca.id === id) {
        if (characters[i].clicked === false) {
          characters[i].clicked = characters[i].clicked = true;
          this.setState({ score: this.state.score + 1 })
          this.state.characters.sort(() => Math.random() - 0.5)
          return true
        } else {
          this.handleResetGame()

        }
      }
    })
  }






  handleResetGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    }
    this.state.characters.forEach(card => {
      card.clicked = false;
    })
    this.setState({ score: 0 })
    return true
  }




  render() {
    return (
      <div>
        <Nav highScore={this.state.highScore} score={this.state.score} />
        <Hero>Memory Clicker</Hero>
        <Container>
          <div className="row">
            {this.state.characters.map(card => (
              <Card
                image={card.image}
                name={card.name}
                key={card.id}
                id={card.id}
                handleClickedCards={this.handleClickedCards}
              />
            ))}
          </div>
        </Container>
        <Footer />
      </div>
    )
  }


}
export default App;
