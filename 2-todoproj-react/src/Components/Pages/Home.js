import React, { Component } from "react";
//import { reactLocalStorage } from 'reactjs-localstorage';
//import uuid from 'react-uuid';
import TodoList from "../TodoList";

const Home = ({allTodos , setTodos , inputValue , setInputValue}) => {
    return (
        <div>
            <div class="description">
                <p class="sub_header__desc">Todo List with <span>react</span>.</p>
            </div>

            <div>
                <form onSubmit={
                    setTodos
                }>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} class="add-snap__input" type="text" placeholder="add todo" name="todoText" />
                </form>
            </div>
            <TodoList allTodos={allTodos} />
            
            <div class="counter">3 snap(s)</div>
        </div>

    )

}
export default Home;
 

/*class Home extends Component {
    
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    onSubmit = e => {
        console.log(this.state)
        const newitem = {
            text: this.state.todoText
        }
        let allTodos = (reactLocalStorage.getObject('allTodoss') ?? [])['allTodos']
        const updatedAllTodos = allTodos.push(newitem)
        reactLocalStorage.setObject('allTodoss', { "alltodos": updatedAllTodos })

    }

    render() {
        
    }
}

export default Home;*/