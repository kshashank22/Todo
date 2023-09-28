import index from './index.css'

function ListItems(props){
    const {value,checked}=props
    console.log(checked)
    
    return(
       <li className='todo-list-items'>
        <div>
        <input type="checkbox"className='todo-checkbox'/>
        <label>{value}</label>
        </div>
        <p>{checked}</p>
       </li>  
    )
}

export default ListItems