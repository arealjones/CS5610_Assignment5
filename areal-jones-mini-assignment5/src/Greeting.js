import React from 'react';


export default class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "purple",
        }
    }

    changeColor() {
        if (this.state.color === "purple") {
            this.setState ({
                color: "green"
            })
        } else {
            this.setState ({
                color: "purple"
            })
        }
    }

    render() {

        return (
            <h1 onClick={() => this.changeColor()} style={{color: this.state.color}}>Welcome to my website, {this.props.name}</h1>
        )
    }
}
