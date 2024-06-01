import React from 'react'
import Search from './Search'

function navbar() {
  return (
    <div className="navbar bg-base-100 glass">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">React Movie Plex</a>
        </div>
        <div className="flex-none gap-2">
            <Search />
        </div>
    </div>
  )
}

export default navbar