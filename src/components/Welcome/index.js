import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  onSubscribe = () => {
    this.setState(preState => ({
      isSubscribe: !preState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state
    let text
    if (isSubscribe) {
      text = 'Subscribed'
    } else {
      text = 'Subscribe'
    }
    return (
      <div className="container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button type="button" onClick={this.onSubscribe}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
