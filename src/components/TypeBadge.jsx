import React from 'react'

function TypeBadge({type}) {
  return (
    <button className="btn">
    Movie Type
    <div className="badge">{type}</div>
    </button>
  )
}

export default TypeBadge