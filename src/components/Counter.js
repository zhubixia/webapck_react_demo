import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {

  }

  increase() {
    this.setState({
      count: this.state.count++
    })
  }

  decrease() {
    this.setState((state) => {
      return state.count ? state.count -- : 0
    })
  }

  render() {
    return (
      <div>
        <span onClick={this.decrease}>-</span>
        <span>{this.state.count}</span>
        <span onClick={this.increase}>+</span>
      </div>
    )
  }
}

export default Counter
