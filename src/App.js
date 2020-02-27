import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    
    this.state={
      toDoList:[
        {id:1 , list:'orva gnumner', tasks:['hac','karag',] },
        {id:2 , list:'orva plan', tasks:['marzvel','sovorel',]},
        {id:3 , list:'handznararutyun', tasks:['hac','zangaharel',]},
      ],
      
      newList:{ id:'' , list:'' , tasks:[] , },

      inp:'',

      inp2:'',

      sel:'',

    }
    
    
  }

add=()=>{
  this.state.newList.id=this.state.toDoList.length+1
  this.state.newList.list=this.state.inp
  this.state.toDoList.push(this.state.newList)
  this.state.inp=''
  this.setState({})
}

inpchange=(e)=>{
  
  let x=e.target.value
  this.state.inp=x
  this.setState({})
}

selchange=(e)=>{
  let x=e.target.value
  this.state.sel=x
  this.setState({})
}

inp2change=(e)=>{
  let x=e.target.value
  this.state.inp2=x
  this.setState({})
}

addtask=()=>{
  for(let i=0 ; i<this.state.toDoList.length ; i++){
    if(this.state.sel==this.state.toDoList[i].id){
      this.state.toDoList[i].tasks.push(this.state.inp2)
    }
  }
  this.state.inp2=''
  this.setState({})
}

checked=(e)=>{
  let a=e.target.parentNode
  let b=e.target.value
  if(b==='on'){
    a.className='line_through'
  }
  this.setState({})
}


  render(){
      return(
        <div className='todolist'>
          <div className='addlist'>
            <input onChange={this.inpchange} placeholder='list' value={this.state.inp} />
            <button onClick={this.add} > Add</button>

          </div>

          <div className='addtask'>
              <select onChange={this.selchange} >
              <option> </option>
                {
                  
                  this.state.toDoList.map((a,i)=>{
                    return(
                      <option value={a.id} key={i}>{ a.list }</option>
                    )

                  })

                }

              </select>
                <input onChange={this.inp2change} placeholder='task' value={this.state.inp2} ></input>
                <button onClick={this.addtask} >addTask</button>
          </div>

          <div className='listtask'>
            <ul>
          {
            this.state.toDoList.map((a,i)=>{
              return(
                <li key={i}>{a.list}
                
                <ul>
                {
                  a.tasks.map((b,j)=>{
                    return(
                    <li key={j}><input type='checkbox' onClick={this.checked} />{b}</li>
                    
                    )
                  })
                }
                </ul>
                </li>
              )

            })
            
          }
          </ul>
         </div>  
          
        
        </div>

      )
    }

}

export default App;
