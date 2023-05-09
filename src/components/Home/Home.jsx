import React from 'react'
import { Navigation } from './Navigation'
import { Content } from './Content'

export const Home = () => {
  return (
    <div className='w-full'>
      <Navigation />
      <Content />
    </div>
  )
}
