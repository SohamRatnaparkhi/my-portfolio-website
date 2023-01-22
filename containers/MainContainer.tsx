import React from 'react'
import FooterContainer from './FooterContainer'
import ShowOffContainer from './ShowOffContainer'
import SplashContainer from './SplashContainer'

const MainContainer = () => {
  return (
    <div className='overflow-x-hidden overflow-y-auto flex flex-col'>
      <SplashContainer />
      <ShowOffContainer />
      <FooterContainer />
    </div>
  )
}

export default MainContainer
