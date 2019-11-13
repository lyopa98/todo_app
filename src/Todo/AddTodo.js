import React,{useState} from 'react'
import PropTypes from 'prop-types'


function AddTodo({onCreate}){
    const [val,setValue] = useState('')

    function submitHandler(event){
        //отменить дефолтное поведение для отмены перезагрузки страницы
        event.preventDefault();
        if(val.trim()){
            onCreate(val);
            setValue('')
        }
    }

    return(
        <form className='addTodo'
            onSubmit = {submitHandler}>
           <input 
           className='addTodoInput'
           value={val}
           onChange = {event =>{
                console.log(event.target.value);
                setValue(event.target.value)}//изменить val
           }
           ></input>
            <button type='submit' className='addTodoButton'>Добавить</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate:PropTypes.func.isRequired
}

export default AddTodo