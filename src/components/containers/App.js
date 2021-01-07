import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Cards from './Cards'
import GlobalStyle from '../styles/GlobalStyle'
import { Wrapper, Title } from '../styles/StyledApp'

const App = () => {

  const [searchInput, setSearchInput] = useState('')

  const getSearchValue = value => {
    setSearchInput(value)
  }

  return (
    <>
      <Wrapper>
        <Title>Hello Finder</Title>
        <SearchBar initValue={searchInput} setValue={getSearchValue} />
        <Cards searchValue={searchInput} />
      </Wrapper>
      <GlobalStyle />
    </>
  )
}

export default App
