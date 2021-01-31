import './App.css';
import { FetchWeather } from './components/FetchWeather';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [weahter, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await FetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weahter.main && (
        <div>
          <span>{weahter.name}</span>
          <sup>{weahter.sys.country}</sup>
          <div>{Math.round(weahter.main.temp)}</div>
          <sup>&deg;C</sup>
        </div>
      )}
    </div>
  );
}

export default App;
