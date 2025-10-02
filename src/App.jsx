import './componets/todo/todo.css';
import TodoNew from './componets/todo/TodoNew.jsx';
import TodoData from './componets/todo/TodoData.jsx';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodos] = useState([
  ]);

  //Props: properties
  //la mot co che de truyen du lieu tu component cha (App) sang component con (TodoData)
  //de component con co the su dung du lieu do de hien thi giao dien

  const name = "Eric GAYY";
  //{key: value}
  const age = 30;
  const data = {
    adress: "HCM",
    phone: "0123456789"
  }
  //{key: value, key: value, key: value}

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000), //random id
      name: name
    } //hien thi name truyen vao

    setTodos([...todoList, newTodo]) //cap nhat lai state
    //...:copy toan bo phan tu trong mang
    //newTodo: them phan tu moi vao cuoi mang
    //render lai giao dien thong qua setTodos
  }
  // addNewTodo();

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}//gia tri = function
      />
      <TodoData
        name={name} //gia tri = string
        age={age} //gia tri = number
        data={data} //gia tri = object
        todoList={todoList}

      //tham chi truyen du lieu qua props khong can truyen qua
      // children
      />
      <div className='todo-image'>
        <img src={reactLogo} className="logo react" />
      </div>

    </div>
  )
}

export default App
