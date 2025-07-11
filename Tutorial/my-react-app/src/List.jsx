
function List(props){
    // const fruits =  [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45}, 
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "pineapple", calories: 37}, 
    //                 {id: 5, name: "coconut", calories: 159}];
    // fruits.sort((a, b) => a.name.localeCompare(b.name));  // ALPHABETIC
    // fruits.sort((a,b) => a.calories - b.calories);  // NUMERIC ORDER
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp; 
                                                <b>{item.calories}</b>
                                                </li>);
    return(
        <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.defaultProps = {
    category: "Category",
    items: [],
}

// Dont forget the unique keys for each item for React its throwing errors
export default List