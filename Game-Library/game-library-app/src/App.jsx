import './styles.css'
import GameCard from './GameCard'
import { useEffect, useState } from 'react'
import gamePlaceholder from './assets/game-placeholder.png'

function App() {

  const [games, setGames] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []
    return JSON.parse(localValue)
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = `26ce77c0037b4f2585a50ed3cead4d25`;

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(games))
  }, [games]);


  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() === '') {
        setSuggestions([]);
        return
      }

      const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}`)
      const data = await res.json();
      setSuggestions(data.results || []);
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return (
      () => {
        clearTimeout(debounce);
      }
    );
  }, [searchTerm])

  const handleAddGame = (game) => {
      if (!game) return;
      
      const newGame = {
        id: game.id,
        title: game.name,
        image: game.background_image,
      };
      setGames((prev) => [...prev, newGame]);
      setSearchTerm('');
      setSuggestions([]);

      console.log('Added game: ', newGame)
  };

  const handleComplete = (id) => {

  };

  const handleDelete = (id) => {
    setGames(prev => prev.filter(game => game.id !== id));
  };

  return (
    <div className='home'>
      <div className='game-search'>
        <input 
          type="text" 
          placeholder='Search for a game' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {suggestions.length > 0 && (
          <ul className='dropdown'>
            {suggestions.slice(0, 5).map((game) => (
              <li key={game.id} onClick={() => setSearchTerm(game.name)}>
                  {game.name}
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => {
            handleAddGame(suggestions[0]);
            console.log(suggestions[0].name)
          }}>
            Add
          </button>
      </div>
      <ul className='game-card-container'>
        {games.map(game => (
          <GameCard 
          key={game.id} 
          title={game.title} 
          image={game.image}
          onDelete={() => handleDelete(game.id)}
          onComplete={() => handleComplete(game.id)}
          ></GameCard>
        ))}
      </ul>
    </div>
  );
}
export default App
