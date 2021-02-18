import React, { useState } from 'react'

import WeatherApp from './WeatherApp';

function SearchBar(props){

    const [query, setQuery] = useState('');

    let handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          props.search(query)
          setQuery('');
        }
      }

    return(
    <input 
        type="text"
        className="search-bar"
        placeholder="Rechercher une ville, un pays..."
        value={query}
        onChange={ evt => setQuery(evt.target.value)}
        onKeyPress={handleKeyPress}
    />
    )
}

export default SearchBar;