import React from 'react'

const Notification = ({message, errorMessage}) => {
    if (message === null) return null
  return (
    <div className='top'>
        {message}
        {errorMessage}

    </div>
  )
}

export default Notification