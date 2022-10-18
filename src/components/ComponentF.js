import React, { Component } from 'react';

// Import the ContextConsumer
import { UserConsumer, SecondNameConsumer } from './Context.js'

class ComponentF extends Component {
    render() {
        return (
            // Return The Consumers passing in the values as the parameters and pros in the functions and element respectively
            <SecondNameConsumer>
                {
                    // The first function returns the second consumer context
                    SecondName => (
                        <UserConsumer>
                            {
                                (username) => {
                                    return <div>Hello {username} {SecondName}</div>
                                }
                            }
                        </UserConsumer>
                    )
                }
            </SecondNameConsumer>
        );
    }
}

export default ComponentF;
