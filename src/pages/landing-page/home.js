import React from 'react'
import Events from './events'
import Chapters from './chapters'
import Header from './header'
import Reach from './reach'
import Publications from './publications'
import Partspons from './partspons'
import Subs from './subs'
import '/Users/Anshika/Desktop/tps-website/src/styles/home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <Chapters/>
    <Reach/>
    <Events/>
    <Publications/>
    <Partspons/>
    <Subs/>
    </>
  )
}

export default Home