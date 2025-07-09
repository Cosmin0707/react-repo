
function Footer(){
    return(
        // can only return a single element
        <footer>
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    );
}

export default Footer