import React, { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard.jsx'
const API_URL = 'http://www.omdbapi.com?apikey=5bd4fca'


const App = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (term) => {
        const response = await fetch(`${API_URL}&s=${term}`)
        const data = await response.json()
        setMovies(data.Search)
        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('spiderman')
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    value={searchTerm}
                    placeholder='Search for movies'
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            <div>
                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            < MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App