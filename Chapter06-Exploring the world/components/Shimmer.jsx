import React from 'react'

const Shimmer = ({ count = 20 }) => {   //default is 20.
    return (
        <div className='shimmer-list'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='shimmer-card'></div>
            ))}
        </div>
    )
}

export default Shimmer