import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'

const SearchBar = () => {
    const { filterData, setData } = useContext(DataContext)
    const [pokemonName, setpokemonName] = useState("")
    function searchHendler() {
        const fetchfun = filterData.filter((e) => e?.name?.toUpperCase()?.includes(pokemonName?.toUpperCase()))
        setData(fetchfun)
    }

    return (
        <div>
            <div className='text-2xl font-bold text-center py-4'>
                <h1>POKEMON FINDER</h1>
            </div>
            <div className='flex justify-center mb-16'>

                <input onChange={(e) => setpokemonName(e.target.value)} value={pokemonName} placeholder='search your pokemon' className='border-2 p-4 rounded-2xl rounded-tr-none rounded-br-none  border-black w-1/2' type="text" />
                <button className='px-7 py-3 bg-black rounded-tl-none rounded-bl-none text-white rounded-2xl cursor-pointer' onClick={searchHendler}>search</button>
            </div>
        </div>
    )
}

export default SearchBar
