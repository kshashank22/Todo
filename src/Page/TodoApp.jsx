import {Component} from 'react'
import './TodoApp.css'
import ListItems from '../Components/ListItems'

class TodoApp extends Component{

  state={task:'',data:[],checked:false}

  onChangeInputValues=(event)=>{
        this.setState({task:event.target.value})
  }

  getDataFromInput=(event)=>{
    const{task}=this.state
      event.preventDefault()
      if (task!==""){
        this.setState({
            task:'',
            data:[...this.state.data,this.state.task]
          })
      }
      
      
  }

  render(){
    const {task,data,checked}=this.state
    return(
      <div className='todo-container'>
        <h1 className='todo-heading'>Todo App</h1>
        <form onSubmit={this.getDataFromInput} className='todo-form'>
           <input type="text" className='todo-input' placeholder='Your Todo' value={task} onChange={this.onChangeInputValues}/>
           <br/>
        <button type='submit' onClick={this.getDataFromInput} className='todo-button'>Add On</button>
        <ul>
          {data.map((each,index)=>(
            <ListItems key={index} value={each} checked={checked}/>
          ))}
        </ul>
        </form>      
      </div>
    )
  }
}

export default TodoApp