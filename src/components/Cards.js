import React, { Component } from 'react'

class Cards extends Component {


    render() {
        // this.setState({ startingCards: this.state.cards[randomCards] })

        console.log(this.props);
        return (
            <div className='container'>

                <div>
                    <div>
                        {this.props.startCard}
                    </div>

                    <div>
                        {this.props.newCard}
                    </div>
                </div>


            </div>
        )
    }
}

export default Cards

// componentDidMount = () => {
//     fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
//         .then(result => result.json())
//         .then(result => console.log(result))
// }