import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  // const [inputValue, setInputValue] = useState() // undefined
  const [inputValue, setInputValue] = useState('') // ''

  const handleInputChange = (e) => {
    // console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
