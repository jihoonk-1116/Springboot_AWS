import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    //converted item -> items list
    this.state = {
      items:[
        {id:"0", title:"Hello World 1", done : true},
        {id:"1", title:"Hello World 2", done : false},
      ],
    };
  }
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items:thisItems});
    console.log("items : ",this.state.items);
  }
  render(){
    //Use map function in JS to create component with the items list
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id}/>
          ))}
        </List>
      </Paper>
    );
    
    //return the generated component
    return (
      <div className="App">
        <Container maxwidth="md">
            <AddTodo add={this.add}/>
            <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;