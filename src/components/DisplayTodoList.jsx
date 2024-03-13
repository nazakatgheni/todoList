import React from 'react'

const DisplayTodoList = (props) => {
    const { todoList, completeList, deleteList } = props
    return (
        <div>
            <h1>This is Display Component</h1>
            {
                todoList.map((list, idx) => {
                    return (
                        <div key={list.id}>
                            <h2 className={list.isComplete ? "completed" : ""}>{list.addedList}</h2>
                            <input type="checkbox" onChange={() => completeList(list)} />
                            <input type="submit" value="Delete" onClick={() => deleteList(list.id)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTodoList
