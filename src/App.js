import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ToDoList : [],
      latestId: 0
    }
  }
  
  componentDidMount(){
    (async() => {
        const API = await fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list");
        const data = await API.json();
        console.log(data);
        this.setState({
          ToDoList : data
        }, ()=>{console.log(this.state.ToDoList)})
      
    })();
    
  }
  render(){
    return (
      <div className="App">
        <header></header>
        <main>

        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
