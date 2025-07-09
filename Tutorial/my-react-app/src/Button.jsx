
function Button(){

    const styles = {
        backgroundColor: "rgba(137, 183, 221, 0.652)",
        color: "rgb(0, 0, 0)",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",

    }

    return(
        <button style={styles}>Click me!</button>
    );
}
// I hate inline styling
// Modules / External / Inline
// Modules seems to work the best and most readable
export default Button