import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    // const valueInput = "Eric";

    const [valueInput, setValueInput] = useState("Eric")


    const { addNewTodo } = props;

    // addNewTodo("Eric");
    const handleClick = () => {
        console.log(">>> Add: ", valueInput);
    }

    const handleChange = (name) => {
        console.log(">>> Handle Change", name);
        setValueInput(name);
    }
    //onchange su kien khi nguoi dung nhap du lieu vao input
    //su kien khi nguoi dung click vao button
    return (
        <div>
            <input type="text"
                onChange={(event) => { handleChange(event.target.value) }}

            />

            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}>

                Add
            </button>
            <div>
                My text input is: {valueInput}
            </div>

        </div>
    )
}

export default TodoNew;