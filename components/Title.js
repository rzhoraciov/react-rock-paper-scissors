import React from 'react'
import css from '../assets/css/styles.scss';


console.log('css', css)

const styles = {
  rock: {
    color: css.rockColor
  },
  paper: { 
    color: css.paperColor
  },
  scissors: {
    color: css.scissorsColor
  },
  child: {
    margin: 'auto'
  }
}

const Title = (props) => {
  return (
    <div styles={styles.child}>
      <h1>
      <span style={styles.rock} >Rock, </span> 
      <span style={styles.paper} >Paper & </span> 
      <span style={styles.scissors} >Scissors</span></h1>
    </div>
  )
}

export default Title