import React from 'react';

// A function that accepts the original component and returns a newComponent
// The second argument is a value that avrries between the two
const UpdatedComponent =  (OriginalComponent, incrementNumber) => {
    // create a component called NewComponent
    class NewComponent extends React.Component {
        // pass the state and setState values to it
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCount = () => {
              this.setState((prevState) => {
                 return {
                  count: prevState.count + incrementNumber
                 } 
              })
          }
        render() { 
            // return the OriginalComponent passing the the additional 'values' as props
            return <OriginalComponent count={this.state.count}
            incrementCount={this.incrementCount}
            name='Paul Kamau'
            {...this.props}/>
        }
    } 
    return NewComponent
}

export default UpdatedComponent;