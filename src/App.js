import React, { Component } from 'react';
import Cards from './components/Cards';
import Button from './components/Button';
import Interface from './components/Interface';
import "bootstrap/dist/css/bootstrap.min.css";
// import deck from './components/Deck'
// console.log(deck)

const deck = ['2Co', '2Ca', '2Pi', '2Tr', '3Co', '3Ca',
  '6Pi', '6Tr', '7Co', '7Ca', '7Pi', '7Tr',
  '8Co', '8Ca', '8Pi', '8Tr', '9Co', '9Ca',
  '9Pi', '9Tr', '10Co', '10Ca', '10Pi', '10Tr',
  '11Co', '11Ca', '11Pi', '11Tr', 'JCo', 'JCa',
  'JPi', 'JTr', 'QCo', 'QCa', 'QPi', 'QTr',
  'KCo', 'KCa', 'KPi', 'KTr'
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerCards: [],
      dealerCards: [],      
      totalPlayer: '',
      totalBanque: '',
      start: false,
      gameEnd: false
    }
  }

  componentDidMount() {
    // desk = () => {

    //     return  newCard(desk)
    // }

  }


  newCard = () => {
    const randomCards = Math.floor(Math.random() * deck.length);
   return deck[randomCards] ;
  }


  calcul = () => {

  }

  clickContinue = (e) => {
    e.preventDefault()

    const randomCard = Math.floor(Math.random() * deck.length);
    this.setState({ newCard: [...this.state.newCard, deck[randomCard]] })
  }

  render() {


    return (
      <>
        <h1>Black Jack Game</h1>

        <Interfacer
          containerPlayer={
            <Cards startCard={this.state.newCard} />
          }

          containerDealer={

          }

          containerButtons={
            <Button clickContinue={this.clickContinue} />
          }




        />
      </>
    )
  }
}

export default App
