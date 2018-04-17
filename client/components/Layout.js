import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export default class Layout extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    return <div>
      <div className="body_container">
        <h5 className="main-title">Link0Shrink</h5>
        {this.props.children}
      </div>
    </div>
  }
}
