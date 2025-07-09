import React, {useState} from "react"

function Component1(){

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery');

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <input type="text" value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>

        <textarea name="" id="" value={comment} onChange={handleCommentChange} placeholder="Additional info"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange} name="" id="">
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="PayPal">PayPal</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick up" checked={shipping == "Pick up"} onChange={handleShippingChange}/>
            Pick up
        </label><br />
        <label htmlFor="">
            <input type="radio" value="Delivery" checked={shipping == "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>);
}
export default Component1

//onChange triggers a function everytime the value changes