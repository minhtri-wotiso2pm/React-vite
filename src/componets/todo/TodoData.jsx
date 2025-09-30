
const TodoData = (props) => {
    //props: la mot doi tuong chua cac thuoc tinh (key) va gia tri (value)
    //duoc truyen tu component cha
    // {
    //     name: "Eric"
    //     age: 30
    //     data: {}
    // }

    const { name, age, data } = props;
    //destructuring
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    console.log("=>Check Props: ", props);
    return (
        <div className='todo-list'>
            <div>My name is {data.adress}</div>
            <div>Learning ReactJS</div>
            <div>Watching Movie</div>
        </div>
    )
}
export default TodoData;