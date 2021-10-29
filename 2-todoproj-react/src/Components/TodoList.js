import React from "react";

const TodoList = ({allTodos}) => {

    return (
        <div>
            <ul class="snaps">
                {
                    allTodos.map((item, index) => (
                        <li>
                            <div class="title">{item.text}</div>
                            <div class="date">
                                <span>{"id: "+item.id}</span>
                            </div>
                        </li>
                    ))

                }
                {/* <li>
                    <div class="title">Lorem ipsum dolor sit amet</div>
                    <div class="date">
                        <span>now</span>
                    </div>
                </li>
                <li>
                    <div class="title">Curabitur gravida arcu ac tortor dignissim.</div>
                    <div class="date">
                        <span>5 minutes ago</span>
                    </div>
                </li>
                <li>
                    <div class="title">Tristique risus nec feugiat in fermentum.</div>
                    <div class="date">
                        <span>7 minutes ago</span>
                    </div>
                </li> */}
            </ul>
        </div>

    );
}
export default TodoList;