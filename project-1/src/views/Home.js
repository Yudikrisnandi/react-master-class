import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getTask, delTask } from "../store/actions/task"
import FormInput from '../components/FormInput';
import TodoItem from '../components/TodoItem';
import SkeletonLoading from '../components/SkeletonLoading';
import EditModal from '../components/EditModal';
import Button from '../components/Button';
import logo from '../logo.svg';
import '../App.css';

let setTodos,loginFailed;

const Home = (props) => {
  const dispatch = useDispatch()
  const { todos, isLoading } = useSelector(state => state.task)
  const [isEdit, setIsedit] = useState(false)
  const [editData, setEditdata] = useState({ id: "", title: ""})
  

  const update = () => {
    const { id, title } = editData 
    const newData = { id, title } 
    const newTodos = todos
    newTodos.splice((id-1), 1, newData)
    setTodos(newTodos)
    setIsedit(false)
    setEditdata({id: "", title: "" })
  }

  const setTitle = e => {
    setEditdata({
      ...editData,
      title: e.target.value
    })
  }

  const openModal = (id, data) => {
    setIsedit(true)
    setEditdata({
      id,
      title: data
    })
  }

  const closeModal = () => {
    setIsedit(false)
  }

  const deleteTask = (id) => {
    dispatch(delTask(id))
  }

  const addTask = data => {
    setTodos([...todos, data])
  }

  

  useEffect(() => {
    dispatch(getTask())
  }, [dispatch])

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Task List</h3>
        <Button variant="primary" onClick={loginFailed} text="logout"/>
      </div>
      <div className="list">
        {isLoading ? (<SkeletonLoading/>) : (
          <>
          {todos.map(item =>
            <TodoItem 
              key={item._id} 
              todo={item} 
              del={deleteTask}
              open={openModal}
            />
          )}
          </>
        )}
      </div>
      <div className="input-form">
        <FormInput add={addTask}/>
      </div>
      <EditModal 
        edit={isEdit} 
        close={closeModal} 
        change={setTitle}
        data = {editData}
        update={update}
      />
    </div>
  );
}

export default Home;
