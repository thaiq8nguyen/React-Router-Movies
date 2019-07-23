import React from 'react'

const Writers = ({writers}) => {
    return (
        <div className="content">
            <p>Writers: <span className="has-text-grey">{writers}</span></p>
        </div>
    )
}

export default Writers
