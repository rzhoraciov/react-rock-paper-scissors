import React from 'react'

const styles = {
  container: {
    //width: 600,
    display: 'flex',    
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'red',
    border: '1',
    borderColor: 'black',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    listStyle: 'none'
  },
  child: {
    backgroundColor: '#f2f3f4',
    padding: 5,
    width: 200,
    //height: 150,
    marginTop: '40',
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: '3em',
    textAlign: 'center',   
  },
}

const Results = (props) => {
  const { me, draw, cpu } = props
  return (
    <ul style={styles.container}>
      <li style={styles.child}>Me <br/> {me}</li>
      <li style={styles.child}>Draw <br/> {draw}</li>
      <li style={styles.child}>CPU <br/>{cpu}</li>      
    </ul>
  )
}

export default Results