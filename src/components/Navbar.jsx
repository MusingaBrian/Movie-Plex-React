import React from 'react'
import Search from './Search'

function navbar({searchTerm, setsearchTerm, searchMovie}) {
  return (
    <nav className="container m-auto glass mt-1">
        <div className="navbar bg-base-100 border-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">React Movie Plex</a>
            </div>
            <div className="flex-none gap-2">
                <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} searchMovie={searchMovie}/>
            </div>
        </div>
    </nav>
  )
}

export default navbar