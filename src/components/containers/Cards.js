import React from 'react'
import CardItem from './CardItem'
import CardsGroup from '../styles/StyledCards'
import data from '../../data/data'

const Cards = props => (
  <CardsGroup className='cards'>
    <CardItem
      data={data.frameworks}
      searchValue={props.searchValue}
    />
  </CardsGroup>
)

export default Cards
