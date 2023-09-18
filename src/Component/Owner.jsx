import React from 'react'
import Navbar from './Navbar'
import OwnerImage from '../assets/OwnerPic.jpg'

function Owner() {
  return (
<div>
    <Navbar />
    <div>
    <div className="card  bg-base-100 shadow-xl glass m-5">
  <figure><img src={OwnerImage} alt="Album" className='w-60 card shadow-2xl'/></figure>
  <div className="card-body">
    <h2 className="card-title">Atithiya Inthorn</h2>
    <p>Hello !, My name is Atithiya Inthorn. I am a graduated from Junior Software Developer 5 of Generation Thailand.
     During my journey, I acquired a strong foundation in programming languages such as HTML, CSS, JavaScript, React, and MERN Stack. I honed my problem-solving abilities through various coursework and projects. My coursework also included database management and web development.
    </p>
    <div className="card-actions justify-end">
      <button className="btn glass bg-slate-300 mt-3">Read More</button>
    </div>
  </div>
</div>

    </div>
</div>
  )
}

export default Owner