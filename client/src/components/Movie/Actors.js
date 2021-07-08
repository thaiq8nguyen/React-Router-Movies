import React from 'react'

const Actors = ({actors}) => {
    return (
        <div className="content">
            <p>Actors/Actresses: <span className="has-text-grey">{actors}</span></p>   
        </div>
    )
}

export default Actors
