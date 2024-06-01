import React from 'react'

function search({searchTerm, setsearchTerm, searchMovie}) {
  return (
    <div className="join">
        <div>
            <div>
                <input 
                    className="input input-bordered join-item" 
                    placeholder="Search For A Movie"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
            </div>
        </div>
        <div className="indicator">
            <button className="btn join-item" onClick={() => searchMovie(searchTerm)}>Search</button>
        </div>
    </div>
  )
}

export default search