import React, { Component } from 'react'

class FormHandlng extends Component {

  constructor(props) {
    super(props)
  
    // set initial state
    this.state = {
       email: '',
       username: ''
    }

  }

  emailHandler = (e) => {
      this.setState({
        email: e.target.value
      })
  }

  usernameHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  buttonSubmit = () => {
    alert(`${this.state.email} is the email`)
  }

  render() {
    const {username, email} = this.state;
    return (
      <form>
        <div>
          <label>Username</label>
        <input type="text" value={username} onChange = {this.usernameHandler} required = 'true'/>
        </div>
        <div>
        <label>Email</label>
        <input type="email" value={email} onChange={this.emailHandler}/>
        <div>
          <label>Topic</label>
          <select>
            <option value="react" key="1">React</option>
            <option value="vue" key="">Vue</option>
            <option value="clojure" key="">Clojure</option>
          </select>
          <div>
          <button type='submit' onClick={this.buttonSubmit}>Submit</button>
          </div>
        </div>
      </div>
      </form> 
    )
  }
}

export default FormHandlng