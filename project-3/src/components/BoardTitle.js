import React, {useContext} from "react"
import { DataContext } from "../context/store"
import "../sass/BoardTitle.scss"

const BoardTitle = ({ id, title }) => {
  const { changeTitle } = useContext(DataContext)
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState(title)
  const openInput = () => {
    setOpen(true)
  }
  const closeInput = () => {
    changeTitle(id, text)
    setOpen(false)
  }
  const handleChange = e => {
    setText(e.target.value)
  }
  return(
    <div className="board-title">
      {open ? (
        <form onSubmit={closeInput}>
          <input 
            autoFocus
            type="text"
            onBlur={closeInput}
            value={text}
            onChange={handleChange}
          />
        </form>
      ) : (
        <h3 onClick={openInput}>{title}</h3>
      )}
    </div>   
  )
}

export default BoardTitle

