import React from 'react'

function Movie({movie}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl image-full w-[300px] h-[400px]">
        <figure>
            <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
            alt={movie.Title}
          />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{movie.Title}</h2>
            <p>Released In the Year {movie.Year}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">{movie.Type}</button>
            </div>
        </div>
    </div>
  )
}

export default Movie