import React from 'react'
import ReactDOM from 'react-dom'

function PortalsDemo() {
  return ReactDOM.createPortal(
    <h1>PortalsDemo</h1>,
    document.getElementById('portals-demo')
  )
}

export default PortalsDemo