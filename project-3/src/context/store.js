import React, { createContext, useState } from "react"
import { v4 as uuid } from "uuid"


const initialState = {
  lists: {},
  listIds: []
}

export const DataContext = createContext()
export const DataProvider = (props) => {
  const [store, setStore] = useState(initialState)
  const addCard = (id, text) => {
    const item = store.lists[id]
    const ids = uuid()
    const newCard = {
      id: `card-${ids}`,
      title: text
    }
    item.cards = [...item.cards, newCard]
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [id]: item
      }
    }
    setStore(newStore)
  }
  const addList = (text) => {
    const newId = `list-${uuid()}`
    const newList = {
      id: newId,
      title: text,
      cards: []
    }
    const newStore = {
      listIds: [...store.listIds, newId],
      lists: {
        ...store.lists,
        [newId]: newList
      }
    }
    setStore(newStore)
  }

  const changeTitle = (id, text) => {
    const item = store.lists[id]
    item.title = text
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [id]: item
      }
    }
    setStore(newStore)
  }
  
  const editCard = (cardId, text, listId, cardIndex) => {
    const item = store.lists[listId]
    const card = item.cards.find(item => item.id === cardId)
    card.title = text
    item.cards.splice(cardIndex, 1, card)
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId] : item
      }
    }
    setStore(newStore)
  }

  const deleteCard = (cardId, listId) => {
    console.log(cardId, listId)
    const item = store.lists[listId]
    const removeCard = item.cards.filter(item => item.id !== cardId)
    item.cards = removeCard
    console.log(item.cards)
    const newStore = {
      ...store,
      lists: {
        ...store.lists,
        [listId]: item
      }
    }
    setStore(newStore)
  }

  const updateDrag = (data) => {
    setStore(data)
  }

  return(
    <DataContext.Provider value={{ store, addCard, addList, changeTitle, updateDrag, editCard, deleteCard }}>
      {props.children}
    </DataContext.Provider>
  )
}

