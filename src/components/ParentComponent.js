import React, { Component } from 'react'
import Memo from './Memo'
// import PureComp from './PureComp'
// import RegularComp from './RegularComp'

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Paulo'
    }
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        name: 'Paulo K'
      })
    }, 2000)
  }

  render() {
    console.log("**********Parent Componenet Rendered**********")
    return (
      <div>
        ParentComponent
        {/* <PureComp name={this.state.name}/> */}
        {/* <RegularComp name={this.state.name}/> */}
        <Memo name={this.state.name} />
      </div>
      
    )
  }
}

export default ParentComponent