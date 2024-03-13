import React, { useState } from 'react'

const TodoList = ({ newList }) => {

    const [singleList, setSingleList] = useState("");
    const [errors, setErrors] = useState("")

    const listValidation = () => {
        let isValid = true;

        if (singleList.length < 3) {
            isValid = false;
        }
        return isValid;
    }

    const submitHandler = e => {
        e.preventDefault();

        if (listValidation()) {
            newList({
                addedList: singleList,
                isComplete: false,
                id: Math.floor(Math.random() * 10000).toString()
            })
            setSingleList("")
            setErrors("")
        } else {
            setErrors("The List Name Should be at least 3 Characters")
            setSingleList("")
        }



        newList({
            addedList: singleList,
            isComplete: false,
            id: Math.floor(Math.random() * 10000).toString()
        })

        setSingleList("")

    }



    const changeHandler = e => {
        setSingleList(e.target.value)
    }

    return (
        <div>
            {errors ? <h3 style={{ color: "red" }}>{errors}</h3> : null}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="list">Add a List</label>
                    <input type="text" name="" onChange={changeHandler} value={singleList} />
                </div>
                <input type="submit" value="Add" style={{
                    marginTop: "25px",
                    marginLeft: "35px"
                }} />
            </form>
        </div>
    )
}

export default TodoList
