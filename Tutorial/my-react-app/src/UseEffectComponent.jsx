// useEffect(function, [dependencied])

//useEffect(() => {})                   runs after every re-render
//useEffect(() => {}, [])               runs only on mount
//useEffect(() => {}, [value])          runs on mount + when value changes

//uses: event istener, dom manipulation, subscriptions, ftching from API, clean up unmounted component
import React, {useState, useEffect} from "react"
function UseEffectComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // SOME CLEANUP CODE

        }
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
}
export default UseEffectComponent;