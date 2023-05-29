import React from 'react'

export default function Page404(props) {
  return (
    <div className='text-center' style={{color : props.mode ==='dark' ? 'white':'black'}}><h1><strong>ERROR 404:  Page not found!</strong></h1></div>
  )
}
