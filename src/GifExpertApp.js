import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch Man',
    // 'Samurai X',
    // 'Dragon Ball',
  ])

  // const handleAdd = () => {
  //   // setCategories([...categories, 'HunterXHunter'])
  //   setCategories(category => [...categories, 'HunterXHunter'])
  //   // console.log(categories)
  // }
  // console.log(categories)

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
