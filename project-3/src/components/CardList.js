import React, { useContext } from "react"
import del from "../assets/delete.svg"
import { Draggable } from "react-beautiful-dnd"
import { DataContext } from "../context/store"
import "../sass/CardList.scss"

const CardList = ({ id, item, index }) => {
  const { editCard, deleteCard } = useContext(DataContext)
  const [edit, setEdit] = React.useState(false)
  const [text, setText] = React.useState(item.title)
  const handleChange = (e) => setText(e.target.value)
  const isEdit = () => setEdit(true)
  const closeInput = (e) => {
    e.preventDefault()
    editCard(item.id, text, id, index)
    setEdit(false)
  }
  const cardDelete = () => {
    deleteCard(item.id, id)
  }
  return(
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <div 
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="card-list"
        >
          {edit ? (
            <form onSubmit={closeInput}>
              <input 
                autoFocus
                type="text"
                onBlur={closeInput}
                value={text}
                onChange={handleChange}
              />
            </form>
          ):(
            <div className="card-list__text">
              <p onClick={isEdit}>{item.title}</p>
              <img src={del} alt="delete" onClick={cardDelete}/>
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}

export default CardList
