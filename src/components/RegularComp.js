import React, { Component } from 'react'

class RegularComp extends Component {
  render() {
    console.log("**********Regular Componenet Rendered**********")
    return (
      <div>RegularComp {this.props.name}</div>
    )
  }
}

export default RegularComp