import { useContext, useEffect, useState } from "react"
import DataContext from "../context/DataContext"


const imgData = (ImgApi) => {

    const { data } = useContext(DataContext)

    const [img, setimg] = useState()

    const fetchImg = async () => {
        const res = await fetch(ImgApi)
        const json = await res.json()
        setimg(json?.sprites?.front_shiny)
    }


    useEffect(() => {
        fetchImg()
    }, [data])

    return img
}

export default imgData