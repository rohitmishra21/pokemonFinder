import React from 'react'
import imgData from '../hooks/useFetchImgData'


const Card = ({ item }) => {

    const img = imgData(item?.url)

    return (
        <div>
            <div className='w-72 h-72  rounded-2xl border-zinc-950 border-2'>
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <h1 className='font-semibold text-lg text-center uppercase'>{item?.name}</h1>
        </div>
    )
}

export default Card
