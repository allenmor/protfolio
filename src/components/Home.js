import React from 'react'
import tunnel from '../images/tunnelcode.jpeg'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
        <div className='hello-div'>
        <img className='tunnel-pic' src={tunnel} />
        <div className='hello-text-div'>
        <h1 className='word-hello'>Hello!</h1>
        <h1 className='intro-text'>I'm Allen, a software engineer based in New York.</h1>
        </div>
        </div>
    </div>
  )
}


export default Home