import React from "react";
import Bootstrap from "react-bootstrap"

const TodoList = ({ allTodos, deleteItem }) => {

    return (
        <div>
            <ul class="snaps">
                {
                    allTodos.map((item, index) => (
                        <li key={item.id}>
                            <div class="title">{item.text}</div>
                            <div class="date">
                                <span>{"Created Date: " + item.createdDate}</span>

                                {/* <span>{"id: " + item.id}</span> */}
                                <span><button class="btn btn-danger" type="button" onClick={(e) => { deleteItem(item.id) }} id="button-deleteAll">Delete</button> </span>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div class="counter">{allTodos.length} todo(s)</div>
        </div>

    );
}
export default TodoList;