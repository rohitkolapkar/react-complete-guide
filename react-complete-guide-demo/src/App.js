import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
      persons:[
        {name:'Rohit',age:23},
        {name:'Swapnil',age:29},
        {name:'Pratima',age:27},
      ],
      otherState:'Some Other Value',
      showPersons:false
  }
  switchNameHandler=(newName)=>{
    this.setState(
      {
        persons:[
          {name:newName,age:23},
          {name:'Swapnil',age:29},
          {name:'Pratima',age:27},
        ]
      }
    )
  }

  nameChangedHandler=(event)=>{
    this.setState(
      {
        persons:[
          {name:'Rohit',age:23},
          {name:event.target.value,age:29},
          {name:'Pratima',age:27},          
        ]
      }
    )
  }

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {
    const style={
      background:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px'
    }; 

    let persons=null;
    if(this.state.showPersons===true){
      persons=(
        <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>

            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}/>

            <Person name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this,'Rohit Bind Props')}
            >My Hobbies : Tiktok</Person>
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello I'm React App</h1>
        <button style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
