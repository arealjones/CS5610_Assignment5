import React from 'react';
import './index.css';

export default class Square extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "white",
        }
    }

    updateSquare() {
        if (this.state.color === "white") {
            {this.props.countIncrFunc()}
            this.setState ({
                color: "black",
            })
        } else {
            {this.props.countDecrFunc()}
            this.setState ({
                color: "white"
            })
        }
    }

    render() {
        return (
            <div onClick={() => this.updateSquare()} class="square" style={{backgroundColor: this.state.color}}></div>
        )
    }
}
