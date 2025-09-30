
const TodoNew = (props) => {
    console.log("=>Check Props TodoNew: ", props);
    const { addNewTodo } = props;

    // addNewTodo("Eric");
    return (
        <div>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;