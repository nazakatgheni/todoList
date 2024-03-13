import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import DisplayTodoList from './components/DisplayTodoList'

function App() {

  const [todoList, setTodoList] = useState([])

  const newList = (newList) => {
    setTodoList([...todoList, newList])
  }



  const completeList = (submittedList) => {

    let updatedList = todoList.map((list, idx) => {
      if (list === submittedList) {
        let newList = { ...list }
        newList.isComplete = !newList.isComplete;
        return newList;
      } else {
        return list;
      }
    })

    setTodoList(updatedList)
  }

  const deleteList = (list_id) => {

    const filteredList = todoList.filter((list) => {
      return list.id !== list_id
    })
    setTodoList(filteredList);
  }


  return (
    <>
      {/*          this new book is key of props */}
      <TodoList newList={newList} />
      <DisplayTodoList todoList={todoList} completeList={completeList} deleteList={deleteList} />
    </>
  )
}

export default App