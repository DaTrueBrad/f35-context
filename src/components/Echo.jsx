import React, {useContext} from 'react'
import GlobalContext from '../state/GlobalContext'

const Echo = () => {
  const {state, dispatch} = useContext(GlobalContext)
  return (
    <div>
      <h5>Echo</h5>
      <h5>Name: {state.name}</h5>
      <h5>Count: {state.count}</h5>
    </div>
  )
}

export default Echo