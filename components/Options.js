import React from 'react'

const style = {
  height: 200,
  width: 200,
  cursor: 'pointer'
}

const Options = (props) => {
  const { onClick } = props
  return (
    <div>      
      <img src="../assets/images/paper.png" onClick={()=> onClick(2)} style={style} />
      <img src="../assets/images/rock.png"  onClick={()=> onClick(1)} style={style} />
      <img src="../assets/images/scissors.png" onClick={()=> onClick(3)} style={style} />
    </div>
  )
}

export default Options