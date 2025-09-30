import './componets/todo/todo.css';
import TodoNew from './componets/todo/TodoNew.jsx';
import TodoData from './componets/todo/TodoData.jsx';
import reactLogo from './assets/react.svg';

const App = () => {

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
    alert(`Call me maybe ${name}`); //hien thi name truyen vao
  }
  // addNewTodo();

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
