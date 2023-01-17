import React from 'react'
import ShowOffContainer from './ShowOffContainer'
import SplashContainer from './SplashContainer'

const MainContainer = () => {
  return (
    <div className='overflow-x-hidden overflow-y-auto'>
      <SplashContainer />
      <ShowOffContainer />
    </div>
  )
}

export default MainContainer
