import React, {useState} from "react"

function MyComponent2(){

    const [car, setCar] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {
            year: carYear, 
            make: carMake, 
            model: carModel};
        setCar(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }
    function handleRemoveCar(index){
        setCar(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Obj: </h2>
            <ul>
                {car.map((element, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {element.year} {element.make} {element.model}
                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car make"/><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car model"/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}
export default MyComponent2