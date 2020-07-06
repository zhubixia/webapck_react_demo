import React, { Component, Fragment } from 'react'
import ReactDom from 'react-dom'
import Clock from 'components/Clock'
import Index from 'components'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Clock name="clock111"/>
        {/* <Clock name="clock222"/>
        <Clock name="clock333"/> */}
      </Fragment>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'))
