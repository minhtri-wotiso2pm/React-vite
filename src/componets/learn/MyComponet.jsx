// () => {}
//component = html + js + css

//JSX: 1 parent + many children


import './style.css';
const MyComponent = () => {
    return (
        <>
            <div className="child">eric & otiso love</div>
            <div className="child">  eric & otiso love eric & otiso love
                {/* style = {{ color: 'blue', fontSize: '30px' }} */}
            </div>
        </>
    );
}


export default MyComponent;