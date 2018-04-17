import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'react-router'
import { BrowserRouter, Route, Switch, Redirect, IndexRoute } from 'react-router-dom'
import '../styles/style.scss'
import Layout from '../components/Layout'
import Test from '../components/Test'
import LinkInput from '../components/LinkInput'

import axios from 'axios'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount = () => {
    let self = this
  }

  render (props) {
    return <div className="container">
        <BrowserRouter>
          <Layout>
            <div className="content-container">
              <Switch>
                <Route path="/" exact render={({ props, history }) => <LinkInput {...props} history={history} />} />
                <Route path="/*" render={({ props, history }) => <Test {...props} history={history} />} />
              </Switch>
            </div>
          </Layout>
        </BrowserRouter>
      </div>
  }
}

// redux
const mapStateToProps = state => {
    return {
        user: state.user, 
        results: state.results
    }
}

export default connect(mapStateToProps)(App)