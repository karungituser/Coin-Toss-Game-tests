// Write your code here

import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResultImage: headsImg}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state

    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let updateHeadsCount = headsCount
    let updateTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImg
      updateHeadsCount += 1
    } else if (toss === 1) {
      tossImage = tailsImg
      updateTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: updateHeadsCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state

    return (
      <div className="coinToss-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="toss-image" />
          <button className="toss-btn" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="score-container">
            <p className="score">Total: {headsCount + tailsCount}</p>
            <p className="score">Heads: {headsCount}</p>
            <p className="score">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
