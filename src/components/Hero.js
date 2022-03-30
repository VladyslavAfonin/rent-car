import React from 'react'

export default function Hero({children, hero}) {
  return (
    <section className={hero}>
        {children}
    </section>
  )
}

Hero.defaultProps = {
    hero: "hero"
}
