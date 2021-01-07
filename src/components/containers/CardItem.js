import React from 'react'
import { Card, CardImage, CardTitle, CardSubtitle } from '../styles/StyledCardItem'

const CardItem = ({ data, searchValue }) => {

  const matchItem = value => {
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    return filteredData.map((item, index) => (
      <Card key={index}>
        <CardImage src={item.image} alt='vue' />
        <CardSubtitle>
          Posted by <span>{item.poster}</span>
        </CardSubtitle>
        <CardTitle>{item.title}</CardTitle>
      </Card>
    ))
  }

  const initItem = () =>
    data.map((item, index) => (
      <Card key={index}>
        <CardImage src={item.image} alt='vue' />
        <CardSubtitle>
          Posted by <span>{item.poster}</span>
        </CardSubtitle>
        <CardTitle>{item.title}</CardTitle>
      </Card>
    ))

  return (
    <>
      {
        searchValue !== ''
          ? matchItem(searchValue)
          : initItem()
      }
    </>
  )
}

export default CardItem
