import React from 'react'
import PropTypes from 'prop-types' 
import TodoItem from './TodoItem.js'


let styles = {
    ul:{
        listStyle:'none',
        margin:0,
        padding:0
    }
}
//props = todosArr
//для каждого пропса выводим тудуАйтем
function TodoList(props){
    return(
        <ul style = {styles.ul}>
            {props.todosArr.map((todo,idx) =>
                <TodoItem 
                    todoName = {todo} 
                    key ={todo.id} 
                    index ={idx} 
                    myOnChange = {props.onToggle}
                    >
                </TodoItem>
            )}
        </ul>
    )
}

TodoList.propTypes = {
    todosArr:PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default TodoList