import React from 'react';
import Square from './Square';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div class="square-container">
                    <Square countIncrFunc={() => this.incrementCount()} countDecrFunc={() => this.decrementCount()}/>
                    <Square countIncrFunc={() => this.incrementCount()} countDecrFunc={() => this.decrementCount()}/>
                </div>
                <div class="square-container">
                    <Square countIncrFunc={() => this.incrementCount()} countDecrFunc={() => this.decrementCount()}/>
                    <Square countIncrFunc={() => this.incrementCount()} countDecrFunc={() => this.decrementCount()}/>
                </div>
            </div>
        )
    }
}
