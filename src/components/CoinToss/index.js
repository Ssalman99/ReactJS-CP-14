// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    active: true,
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      console.log(tossResult)
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        active: true,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
        active: false,
      }))
    }
  }

  render() {
    const {active, tails, heads, total} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="pera">Heads (or) Tails</p>

          <div>
            {active ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="image"
              />
            )}
          </div>

          <button className="button" type="button" onClick={this.onToss}>
            Toss Coin
          </button>

          <div className="toss-result">
            <p className="pera1">total: {total}</p>
            <p className="pera1">Heads: {heads}</p>
            <p className="pera1">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
