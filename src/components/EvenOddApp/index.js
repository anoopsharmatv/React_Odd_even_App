import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  increaseNumber = () => {
    const num = 0 + Math.round(Math.random() * 100, 0)
    this.setState(prevState => ({count: prevState.count + num}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button
            className="button"
            type="button"
            onClick={this.increaseNumber}
          >
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
