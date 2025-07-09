
function Button_1(){
    // let count = 0
    // const handleClick = (name) => {
    //     if(count<3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s!`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // return(<button onClick={() => handleClick("Bro")}>Click me!</button>);

    const handleClick = (e) => {
        e.target.textContent = "Damn"
    };

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me!</button>);
}
// U can use a () => to execute code only when called by fnction smart
export default Button_1