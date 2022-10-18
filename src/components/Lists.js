import React, { Component } from 'react'

class Lists extends Component{
  render() {
    const namesList = ['Paul', 'Kamau', 'Pau']
    const namesLists = namesList.map((names, index) => <h2 key={index}>{index}. {names}</h2>)
    return (
      <div>
        {namesLists}
      </div>
    )
  }
}

export default Lists