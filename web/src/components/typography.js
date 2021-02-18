import React from 'react'

export const H1 = ({ children }) => {
  return <h1 className="text-4xl font-bold my-4 tracking-wide">{children}</h1>
}

export const H2 = ({ children }) => (
  <h2 className="text-2xl font-bold my-3 tracking-wide">{children}</h2>
)

export const H3 = ({ children }) => {
  return <h3 className="text-xl font-bold my-2 tracking-wide">{children}</h3>
}

export const H4 = ({ children }) => (
  <h4 className="text-sm font-normal tracking-wide my-2">{children}</h4>
)

export const BodyParagraph = ({ children }) => (
  <p className="max-w-2xl text-base md:text-lg tracking-wide my-2">
    {children}
  </p>
)
