import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';
import Title from './Title'
import Options from './Options'
import Results from './Results'
import Timeline from './Timeline'
import { timingSafeEqual } from 'crypto';

import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread:445,
  startVelocity: 15,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};


const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap'
}


class App extends Component {

  state = {
    me: 0,
    cpu: 0,
    draw: 0,
    timeline: [],
    celebrate: false
  }

  options = {
    '1': {
      name: 'rock',
      img: 'rock.png',
      mini_img: 'mini-r.png'
    },
    '2': {
      name: 'paper',
      img: 'paper.png',
      mini_img: 'mini-p.png'
    },
    '3': {
      name: 'scissors',
      img: 'scissors.png',
      mini_img: 'mini-s.png'
    }
  }

  onOptionClicked = (me) => {
    const cpu = this.cpuSelection()    
    const result = this.battle(me, cpu)

    switch(result) {
      case null:
        this.setState((prevState) => ({
          draw: prevState.draw + 1
        }))
        break
      case true:
          this.setState((prevState) => ({
            me: prevState.me + 1,
            celebrate: true,
          }))
          setTimeout(() => this.setState({celebrate: false}), 100)
        break
      case false:
          this.setState((prevState) => ({
            cpu: prevState.cpu + 1
          }))
        break
    }
    this.setState((prevState) => ({
      timeline: [{ me, cpu, result }, ...prevState.timeline]
    }))
  }

  

  /*
    1 rock
    2 paper
    3 scissors
  */

  battle = (me, cpu) => {
    if(me === cpu) {
      return null
    }
    if(me === 1) {
      return cpu === 2 ? false: true        
    }

    if(me === 2) {
      return cpu == 3 ? false : true
    }

    if(me == 3) {
      return cpu === 1 ? false: true
    }
  }

  cpuSelection = () => {
    return Math.floor((Math.random() * 3) + 1);
  }

  render() {
    const { celebrate } = this.state
    return (
      <div className="app" style={style}>
        <Confetti active={celebrate} config={ config }/>
        <Title />
        <Options onClick={this.onOptionClicked} />
        <Results {...this.state}/>
        <Timeline {...this.state} options={this.options}/>
      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
