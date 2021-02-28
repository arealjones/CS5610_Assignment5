import React from 'react';
import Greeting from './Greeting';


export default class AgeCounter extends React.Component {

    render() {

        return (
            <div>
                <div onClick={() => this.props.ageIncrFunc()}>{this.props.age}</div>
            </div>
        )
    }
}
