
const TodoData = (props) => {
    //props: la mot doi tuong chua cac thuoc tinh (key) va gia tri (value)
    //duoc truyen tu component cha
    // {
    //     name: "Eric"
    //     age: 30
    //     data: {}
    // }

    const { todoList } = props;
    //destructuring
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    console.log("=>Check Props: ", todoList);
    return (
        <div className='todo-list'>
            {todoList.map((item, index) => {
                console.log(">>> Check map: ", item, index);
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}
export default TodoData;