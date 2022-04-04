import React from 'react'

export default function Hero({children, className}) {
  return (
    <section className={className}>
        {children}
    </section>
  )
}

Hero.defaultProps = {
    className: "hero"
}
