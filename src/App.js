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
      totalBanque: ''
    }
  }

  componentDidMount() {
    let array = [];
    for (let i = 0; i < 2; i++) {
      const randomCards = Math.floor(Math.random() * this.state.cards.length);
      array.push(this.state.cards[randomCards])
      // this.setState({ startingCards: [...this.state.startingCards, 2] })
      console.log('hi', i);

    }
    this.setState({ startingCards: array })
    // if (condition) {

    // }
    // const randomCards2 = Math.floor(Math.random() * this.state.cards.length - 1) + 1;
    // this.setState({ startingCards: this.state.cards[randomCards] })
  }
  calcul = () => {

  }

  clickContinue = (e) => {
    e.preventDefault()
    const newCard = Math.floor(Math.random() * this.state.cards.length);
    this.setState({ startingCards: [...this.state.startingCards, this.state.cards[newCard]] })
  }

  render() {
    // const randomCards = Math.floor(Math.random() * this.state.cards.length - 1) + 1;
    // const randomCards2 = Math.floor(Math.random() * this.state.cards.length - 1) + 1;
    console.log('hello', this.state.startingCards);
    return (
      <>
        <h1>Black Jack Game</h1>
        <div className='container'>
          {this.state.startingCards.map((el, index) => (
            // <div key={index}>
            <Cards key={index} startCard={el} />

            // </div>
          ))}

          <Button clickContinue={this.clickContinue} />
          {/* <div>
            <Cards clickContinue={this.clickContinue} startCard2={this.state.cards[randomCards2]} />

          </div> */}
          {/* <Cards startCard2={this.randomCards2} /> */}
          {/* <Button /> */}
        </div>
      </>
    )
  }
}

export default App
