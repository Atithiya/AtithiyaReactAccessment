import React from 'react'
import { Link } from 'react-router-dom'

function ButtonClick() {
  return (
    <div className=''>
        <Link to={'/HomeUser'}><button className='btn glass bg-gray-500 m-5'>User Home Sector</button></Link>
        <Link to={'/HomeAdmin'}><button className='btn glass bg-gray-500'>Admin Home Sector</button></Link>
    </div>
  )
}

export default ButtonClick