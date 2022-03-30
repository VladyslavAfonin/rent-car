import React from 'react'

export default function Banner({children, title, subtitle}) {
  return (
    <div className="hero__banner">
        <h1 className='hero__title'>{title}</h1>
        <p className='hero__subtitle'>{subtitle}</p>
        {children}
    </div>
  )
}
