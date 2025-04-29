import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'
import ShemerUi from './ShemerUi'


const Home = ({ ref }) => {

    const { data } = useContext(DataContext)
 
    return (
        <div>
            <div className='flex flex-wrap gap-3 justify-center mt-5'>
                {
                    data.length === 0
                        ? Array.from({ length: 50 }).map((_, i) => <ShemerUi key={i} />) 
                        : data.map((item, i) => <Card key={i} item={item} />) 
                }
            </div>
            <div ref={ref}></div>
        </div>
    )
}

export default Home
