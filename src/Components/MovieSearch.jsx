import React, { useState } from 'react'

const MovieSearch = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    }

  return (
    <form onSubmit={handleSubmit} >
        <input
        className='search'
            minLength={1}
            value={searchTerm}
            type='text'
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder='Movie title...'
        />
        <button type='submit'>Search</button>
    </form>
  )
}

export default MovieSearch