import React from 'react'

const Error = ({children}) => {
  return (
    <div>
        <p className="bg-red-800 text-white text-center uppercase font-bold p-3 mb-5 rounded-xl">
            {children}
        </p>
    </div>
  )
}
export {Error}