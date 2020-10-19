import React, { useContext } from "react"
import close from "../assets/close.svg"
import Textarea from "react-textarea-autosize"
import { DataContext } from "../context/store"
import "../sass/AddButton.scss"

const AddButton = ({ list, id }) => {
  const { addCard, addList } = useContext(DataContext)
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState("")
  const openForm = () => setOpen(true)
  const closeForm = () => {
    setText("")
    setOpen(false)
  }
  const cardAdd = () => {
    if(text)
      addCard(id, text) 
    setText("")
  }
  const listAdd = () => {
    if(text)
      addList(text)
    setText("")
  }

  const showForm = () => {
    const btnText = list ? "add card" : "add list"
    const placeholder = list ? "Enter list title..." : "Enter card title..."
    return(
      <div 
        className="form-box"
      >
        <Textarea 
          onBlur={closeForm}
          autoFocus
          className="text-area"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add" onMouseDown={list ? listAdd : cardAdd}>{btnText}</button>
        <button className="close" onMouseDown={closeForm}>
          <img src={close} alt="close" />
        </button>
      </div>
    )
  }
  const showButton = () => {
    const text = list ? "add new list" : "add new card"
    const btnOpacity = list ? 1 : 0.5
    const btnColor = list ? "white" : "inherit"
    const btnBackground = list ? "rgba(0, 0, 0, 0.25)" : "inherit"

    return(
      <div 
        className="add-btn"
        onClick={openForm}
        style={{
          opacity: btnOpacity,
          color: btnColor,
          background: btnBackground
        }}
      >
        + {text}
      </div>
    )
  }
  return open ? showForm() : showButton()
}

export default AddButton

