// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coinImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    headsCount: 0,
    tailsCount: 0,
  }
  onClickButton = () => {
    const {coinImg, total, headsCount, tailsCount} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    if (randomNumber % 2 === 0) {
      this.setState({
        coinImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })

      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState({
        coinImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }
  render() {
    const {coinImg, total, headsCount, tailsCount} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={coinImg} alt="toss result"/>
          <button onClick={this.onClickButton}>Toss Coin</button>
          <div className="counter-container">
            <p>Total:{total}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
