import React,{useContext} from 'react'
import PropTypes from 'prop-types' 
import Context from '../context.js'

const styles = {
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'.5rem 1rem',
        border:'3px solid #ccc',
        borderRadius:'4px',
        marginBottom:'.5rem'
    },
    input:{
        marginRight:'1rem'
    }

}

// function ex(id){
//     console.log(id);
// }


//props = todoName
function TodoItem(props){
    const {removeTodo} = useContext(Context);
    const classes = [];
    if(props.todoName.completed){
        classes.push('done')
    }
    return(
        <li style = {styles.li}>
            <span className = {classes.join(' ')}>
                <input type = "checkbox" 
                style={styles.input} 
                onChange ={()=> props.myOnChange(props.todoName.id)} 
                checked = {props.todoName.completed? true:false}
                //onChange = {()=>ex(props.todoName.id)}
                />
                {props.index + 1}
                &nbsp;
                {props.todoName.title}
            </span>
            
            <button className='rm' onClick={removeTodo.bind(null,props.todoName.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    index:PropTypes.number,
    todoName:PropTypes.object.isRequired,
    myOnChange:PropTypes.func.isRequired
}

export default TodoItem