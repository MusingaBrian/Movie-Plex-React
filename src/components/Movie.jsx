import React from 'react'

function Movie({movie1}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl image-full">
        <figure>
            <img 
            src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} 
            alt={movie1.Title}
          />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{movie1.Title}</h2>
            <p>Released In the Year {movie1.Year}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">{movie1.Type}</button>
            </div>
        </div>
    </div>
  )
}

export default Movie