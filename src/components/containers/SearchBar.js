import React from 'react'
import SearchInput from '../styles/StyledSearchBar'

const SearchBar = props => {

  const updateSearchValue = event => {
    props.setValue(event.target.value)
  }

  return (
    <>
      <SearchInput
        type='text'
        placeholder='Search'
        value={props.initValue}
        onChange={updateSearchValue}
      />
    </>
  )
}

export default SearchBar
