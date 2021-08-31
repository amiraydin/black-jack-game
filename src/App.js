import React, { Component } from 'react';
import Cards from './components/Cards';
import Button from './components/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: ['2💔', '2🍀', '2🔶', '2🖤', '3💔', '3🍀',
        '3🔶', '3🖤', '4💔', '4🍀', '4🔶', '4🖤',
        '5💔', '5🍀', '5🔶', '5🖤', '6💔', '6🍀',
        '6🔶', '6🖤', '7💔', '7🍀', '7🔶', '7🖤',
        '8💔', '8🍀', '8🔶', '8🖤', '9💔', '9🍀',
        '9🔶', '9🖤', '10💔', '10🍀', '10🔶', '10🖤',
        '11💔', '11🍀', '11🔶', '11🖤', 'J💔', 'J🍀',
        'J🔶', 'J🖤', 'Q💔', 'Q🍀', 'Q🔶', 'Q🖤',
        'K💔', 'K🍀', 'K🔶', 'K🖤'],
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
  // newCard = () => {
  //   const new = Math.floor(Math.random() * this.state.cards.length)
  // }

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

          <div className='player'>
            {this.state.startingCards.map((el, index) => (
              <Cards key={index} startCard={el} />
            ))}
          </div>
          <div className='bank'>
            {this.state.totalBanque.map((el, index) => (
              <Cards key={index} startCard={el} />
            ))}
          </div>

          <Button clickContinue={this.clickContinue} clickStop={this.clickStop} />

        </div>
      </>
    )
  }
}

export default App