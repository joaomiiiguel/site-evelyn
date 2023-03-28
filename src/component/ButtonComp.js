import React from 'react'

export default function ButtonComp({name, onClick}) {
  return (
    <a 
    onClick={() => onClick} 
    className='flex rounded-full p-4 bg-gradient-to-r from-background1 to-background2 hover:brightness-125 text-white text-center	items-center justify-center transition ease-in-out delay-150'>
      {name}
    </a>
  )
}
