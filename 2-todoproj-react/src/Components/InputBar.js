import React from "react";

const InputBar = ({ setTodos, inputValue, setInputValue }) => {
    return (
        <div>
            <form onSubmit={setTodos}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} class="add-snap__input" type="text" placeholder="add todo" name="todoText" />
            </form>
            {/* <button class="btn btn-danger" type="button" onClick="deleteAllItem()" id="button-deleteAll">Delete All</button> */}
        </div>
    )
}
export default InputBar;

