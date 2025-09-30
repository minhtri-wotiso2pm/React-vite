
const TodoNew = (props) => {
    console.log("=>Check Props TodoNew: ", props);
    const { addNewTodo } = props;

    // addNewTodo("Eric");
    const handleClick = () => {
        alert("Click me");
    }

    const handleChange = (name) => {
        console.log(">>> Handle Change", name);
    }

    return (
        <div>
            <input type="text"
                onChange={(event) => { handleChange(event.target.value) }} />
                //onchange su kien khi nguoi dung nhap du lieu vao input
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}>
                //su kien khi nguoi dung click vao button
                Add</button>
        </div>
    )
}

export default TodoNew;