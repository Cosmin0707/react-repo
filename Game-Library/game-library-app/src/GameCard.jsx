import './styles.css'

export default function GameCard({ title, image, onComplete, onDelete }){
    return(
        <div className="game-card" >
            <img src={image} alt={title} className="game-image"/>
            <div className="game-card-bottom">
                <h2>{title}</h2>
                <button className='complete-button' onClick={onComplete}>Completed</button>
                <button className='delete-button' onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}