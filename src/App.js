import React, { Component } from 'react';
import Cards from './components/Cards';
import Button from './components/Button';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
      startingCards: [],
      newCard: '',
      // suits : [❤🖤]
      totalPlayer: '',
      totalBanque: []
    }
  }

  componentDidMount() {
    let array = [];
    for (let i = 0; i < 2; i++) {
      const randomCards = Math.floor(Math.random() * this.state.cards.length);
      array.push(this.state.cards[randomCards])
      // this.setState({ startingCards: [...this.state.startingCards, 2] })
    }
    this.setState({ startingCards: array })
    // this.setState({ totalBanque: array })
    // if (condition) {

    // }
    // const randomCards2 = Math.floor(Math.random() * this.state.cards.length - 1) + 1;
    // this.setState({ startingCards: this.state.cards[randomCards] })
  }
  calcul = () => {

  }

  clickStop = (ele) => {
    ele.preventDefault()
    const ordi = Math.floor(Math.random() * this.state.cards.length)
    this.setState({ totalBanque: [...this.state.totalBanque, this.state.cards[ordi]] })
  }

  clickContinue = (e) => {
    e.preventDefault()
    const newCard = Math.floor(Math.random() * this.state.cards.length);
    this.setState({ startingCards: [...this.state.startingCards, this.state.cards[newCard]] })
  }

  render() {
    console.log('cards', this.state.startingCards);
    console.log('banque', this.state.totalBanque);
    return (
      <>
        <h1>Black Jack Game</h1>
        <div className='container'>

          <div>
            {this.state.startingCards.map((el, index) => (
              <Cards key={index} startCard={el} />
            ))}
          </div>
          {this.state.totalBanque.map((el, index) => (
            <Cards key={index} startCard={el} />
          ))}

          <Button clickContinue={this.clickContinue} clickStop={this.clickStop} />

        </div>
      </>
    )
  }
}

export default App
