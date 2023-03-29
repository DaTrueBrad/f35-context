import React, {useState} from 'react'
import Delta from './Delta'
import Modal from './Modal'

const Charlie = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)
  
  return (
    <div>
      <h3>Charlie</h3>
      <button onClick={handleClick}>Show Modal</button>
      {toggle && <Modal />}
      <Delta />
    </div>
  )
}

export default Charlie