function ProfilePicture(){
    const imageUrl = "https://picsum.photos/536/354"

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    );
}
// Handle click events important u can get with e the whole event and modify everything 
export default ProfilePicture