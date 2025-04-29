import React, { useState, useEffect } from 'react'
import Home from './component/Home'
import SearchBar from './component/SearchBar'
import DataContext from './context/DataContext'
import { API_URL } from "./utils/config"
import { useInView } from 'react-intersection-observer';
import ShemerUi from './component/ShemerUi'
const App = () => {

  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [ref, inView] = useInView({ threshold: 1 });
  const [limit, setLimit] = useState(10)

  async function fetchDataFn() {
    const res = await fetch(API_URL + limit)
    const json = await res.json()
    setData(json?.results)
    setFilterData(json?.results)
  }

  useEffect(() => {
    fetchDataFn()
    if (inView) {
      setLimit((p) => p + 10)
    }
  }, [limit, inView])


  return (
    <DataContext.Provider value={{ data: data, setData, setFilterData, filterData: filterData }}>
      <SearchBar />
      <Home ref={ref} />
    </DataContext.Provider>
  )
}

export default App
