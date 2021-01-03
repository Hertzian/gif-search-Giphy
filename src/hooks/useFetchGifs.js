import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((imgs) => {
      console.log(imgs)

      setImages({
        data: imgs,
        loading: false,
      })
    })
  }, [category])

  return images // {data: [], loading: true}
}
