import React, { useContext } from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { DataContext } from "./context/store"
import Board from "./components/Board"
import Header from "./components/Header"
import AddButton from "./components/AddButton"
import "./App.scss"

const App = () => {
  const { store, updateDrag } = useContext(DataContext)
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result
    if(!destination) return
    if(type === "list"){
      const newListIds = store.listIds
      newListIds.splice(source.index, 1)
      newListIds.splice(destination.index, 0, draggableId)
      const newState = {
        ...store,
        listIds: newListIds
      }
      updateDrag(newState)
      return
    }
    const sourceList = store.lists[source.droppableId]
    const destinationList = store.lists[destination.droppableId]
    const draggingCard = sourceList.cards.find(card => card.id === draggableId)
    if(source.droppableId === destination.droppableId){
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newState = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: destinationList
        }
      }
      updateDrag(newState)
    }else{
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newState = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id] : sourceList,
          [destinationList.id] : destinationList
        }
      }
      updateDrag(newState)
    }
  }
  return(
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {provided => (
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Header/>
            <div className="container">
            {store.listIds.map((id, index) => {
              const data = store.lists[id]
              return <Board key={id} data={data} index={index}/>
            })}
            <AddButton list/>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default App;

