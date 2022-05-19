
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='container'>
      <Announcement></Announcement>
        <Navbar></Navbar>
    </div>
  )
}

export default Home