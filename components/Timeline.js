import React from 'react'


const styles = {
  container: {
    //width: 600,
    display: 'flex',    
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 0,
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    listStyle: 'none'
  },
  child: {    
    padding: 5,
    width: 200,
    //height: 150,
    marginTop: 10,
    color: 'white',
    //fontWeight: 'bold',
    //fontSize: '3em',
    textAlign: 'center'
  }
}

const Timeline = (props) => {

  const { timeline, options } = props
  
  if(timeline.length === 0) {
    return <div>Ready to play</div>
  }
  console.log('timeline', timeline)
  console.log('options', `assets/images/${options[1].mini_img}`)
  return (
    <div>
      {
        timeline.map((r, index) => {
          return (
            <ul style={styles.container} key={`${r.me}-${index}-cont`}>
              <li style={styles.child} key={`${r.me}-${index}-me`}><img src={`assets/images/${options[r.me].mini_img}`} /> </li>
              <li style={styles.child} key={`${r.me}-${index}-${r.cpu}-divider`}><hr/></li>
              <li style={styles.child} key={`${r.cpu}-${index}-cpu`}> <img src={`assets/images/${options[r.cpu].mini_img}`} /> </li>
            </ul>
          )
        }) 
      }      
    </div>
  )
}

export default Timeline