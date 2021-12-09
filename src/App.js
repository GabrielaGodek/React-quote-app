import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  // Przechwycenie z API tablicy cytatów, przypisanie ich do formatu .json
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(res => res.json())
      .then(
        (quotes) => {
          let q = []
          const length= quotes.length
          for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * quotes.length)
            let newQuote = quotes.splice(random, 1)
            q.push(newQuote[0])
          }
          setQuotes(q);
        }
      )
  }, [])

  return (
    <div className="App">
      <div className="quote">
        <h1>{quotes.length ? quotes[index].quote : 'Loading...'}</h1>
        <h3>{quotes.length ? quotes[index].author : 'Loading...'}</h3>
      </div>
      {/* buttons disabled przy indeksach wykraczajacych poza dostepna tablice 
      przesuwanie indeksu +/- 1 zeby wyświetlić kolejny i poprzedni cytat */}
      <button className="btn" disabled={index <= 0} onClick={() => setIndex(index - 1)}>Poprzedni cytat</button>
      <button className="btn" disabled={index >= quotes.length} onClick={() => setIndex(index + 1)}>Wygeneruj nowy</button>
    </div>
  );
}

export default App;
