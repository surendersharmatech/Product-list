import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            <div style={{float:this.props.float}}>
                <button className='btn'  onClick={this.props.onClick}>
                    {this.props.buttonName}
                </button>
            </div>
        )
    }
}

export default Buttons
