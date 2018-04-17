import React, { Component } from 'react'
import axios from 'axios'

class LinkInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      link: '',
      protocol: 'https://',
      display: ''
    }
  }

  handleInput = e => {
    console.log(e.target.value)
    this.setState({ link: e.target.value })
  }

  handleClick = () => {
    let self = this;
    console.log('handle click')
    console
      .log('post to back end')
      // axios.post('/shorten', { protocol: this.state.protocol, link: this.state.link})
      axios.post('/shorten', {link: this.state.link})
      .then(res => {
        console.log(res)
        let resLength = res.data.length
        self.setState(
          // { display: 'localhost:3000/' + res.data[resLength - 1].tag },
          { display: 'linkoshrink.herokuapp.com/' + res.data[resLength - 1].tag },
          () => {
            console.log('display', self.state.display)
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleProtocol = (e) => {
    console.log('handle protocol')
    this.setState({protocol: e.target.value + "://"}, ()=>{
      console.log('protocol', this.state.protocol)
    })
  }

  render() {
    return <div className="LinkInput">
        {/*<select name="protocol" onChange={this.handleProtocol}>
          <option value="http">https</option>
          <option value="https">http</option>
        </select>*/}
        <input type="text" placeholder="enter a link to shorten" onChange={this.handleInput} />
        <button onClick={this.handleClick}>Shorten</button>
        <div>
          <div onClick={() => {
              // console.log('click', location.href)
              // location.href = this.state.display
              // console.log(location)
            }}>
            {this.state.display? <p>Here's your link: {this.state.display}</p> : null}
          </div>
        </div>
      </div>
  }
}

export default LinkInput
