import React from 'react'
import Search from './Search'
import Logo from './Logo'

function navbar({searchTerm, setsearchTerm, searchMovie}) {
  return (
    <nav className="container m-auto glass mt-1">
        <div className="navbar bg-base-100 border-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl flex flex-row items-center justify-center">
                  <Logo />
                  <h1>React Movie Plex</h1>
                </a>
            </div>
            <div className="flex-none gap-2">
                <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} searchMovie={searchMovie}/>
            </div>
        </div>
    </nav>
  )
}

export default navbar