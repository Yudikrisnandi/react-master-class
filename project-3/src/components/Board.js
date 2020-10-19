import React from "react"
import { Draggable, Droppable } from "react-beautiful-dnd"
import BoardTitle from "./BoardTitle"
import menu from "../assets/menu.svg"
import CardList from "./CardList"
import AddButton from "./AddButton"
import "../sass/Board.scss"

const Board = ({ data, index }) => {
  return(
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <div 
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="board"
        >
          <div className="board__title">
            <BoardTitle id={data.id} title={data.title}/>
            <div {...provided.dragHandleProps} className="dot">
              <img src={menu} alt="menu" />
            </div>
          </div>
          <Droppable droppableId={data.id}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.cards.map((card, index) =>
                  <CardList key={card.id} id={data.id} item={card} index={index}/>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddButton id={data.id}/>
        </div>
      )}
    </Draggable>
  )
}

export default Board

