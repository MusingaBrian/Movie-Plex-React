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
        <select className="select select-bordered join-item">
            <option disabled selected>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
        </select>
        <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span> 
            <button className="btn join-item" onClick={() => searchMovie(searchTerm)}>Search</button>
        </div>
    </div>
  )
}

export default search