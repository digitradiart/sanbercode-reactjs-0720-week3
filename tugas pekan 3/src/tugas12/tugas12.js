import React, {Component} from 'react'
import './countdown.css'

class CountDown extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 10,
      date: new Date() // modif ini
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      // time: this.state.time + 1 
      time: this.state.time - 1, // hitung mundur
      date: new Date()
    });
  }

  render(){
    return(
      <>
        <h1 style={{textAlign: "center"}}>
          {/* {this.state.time} */}
          {
            this.state.time >= 0 &&
            <div> 
              <h4 id='currentTime'>
                {'Current Time: ' + this.state.date.toLocaleTimeString()}
              </h4>

              <h4 id='countDown'>
                {'Count Down: ' + this.state.time}
              </h4>
            </div>
          }

        </h1>
      </>
    )
  }
}

export default CountDown;