import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <>
                <div>
                    <button className="btn btn-outline-primary" onClick={this.props.clickContinue}>Continuer</button>
                </div>
                <div>
                    <button className="btn btn-outline-primary" onClick={this.props.clickStop} >Stop</button>
                </div>
            </>
        )
    }
}

export default Button
