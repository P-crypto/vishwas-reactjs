import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {
    render() {
        // destructure the count and incrementCount props
        const {count, incrementCount, name} = this.props
        return (
            <div onMouseOver={incrementCount}>
                <h3>
                {name} Hovered {count} times
                </h3> 
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter, 10);
