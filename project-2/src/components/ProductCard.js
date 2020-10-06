import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { addCart } from "../store/actions/product"

const Card = styled.div`
  width: 17%;
  height: 12rem;
  cursor: pointer;
`
const CardImg = styled.img`
  width: 100%;
  height: 50%;
`
const NamePrice= styled.div`
  display: flex;
  justify-content: space-between;
`


const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  const addToCart = id => {
    dispatch(addCart(id))
  }
  return(
    <Card onClick={() => addToCart(item.id)}>
      <CardImg src={item.image} alt={item.name}/>
      <NamePrice>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </NamePrice>
    </Card>
  )
}

export default ProductCard

