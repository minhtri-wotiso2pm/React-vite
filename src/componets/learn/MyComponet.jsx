// () => {}
//component = html + js + css

//JSX: 1 parent + many children


import './style.css';
const MyComponent = () => {
    const name = "Meow"; //String or //Number or //Boolean or //Array or //Object

    const obj = {            //object
        name: "love CAT",
        age: 30
    }

    //JSON.stringify(obj)

    return (
        <>
            <div className="child">{name} {obj.age} {obj.name} eric & otiso love</div>
            <div className="child" style={{ color: "red" }}> eric & otiso love eric & otiso love</div>
        </>
    );
}


export default MyComponent;