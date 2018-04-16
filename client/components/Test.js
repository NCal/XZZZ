import React, { Component } from 'react'
import axios from 'axios'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: ''
    }
  }

  componentDidMount = () => {
    let loc = String(this.props.history.location.pathname)
    let locLength = loc.length
    loc = loc.slice(2, loc.length)
    console.log('str', loc)
    this.setState({tag: loc}, ()=>{
      axios
        .post('/redirect', { tag: this.state.tag })
        .then(res => {
          console.log(res.data[0].url)
          location.href = res.data[0].url

          
        })
        .catch(err => {
          console.log(err)
        })
    })
  }

  render() {
    return (
      <div className="Test">
      duzntevnmatur
      <br/>
      {this.state.tag}
      </div>
    )
  }
}

export default Test
