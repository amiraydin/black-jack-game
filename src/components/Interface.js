import React from 'react'

class Interface extends React.Component {



    render() {

        return(

            <div className='container-principal'>

                <div className='container-player'>{this.props.containerPlayer}</div>

                <div className='container-player'>{this.props.containerDealer}</div>
                
                <div className='container-player'>{this.props.containerButtons}</div>


            </div>
        )
    }
}

export default Interface