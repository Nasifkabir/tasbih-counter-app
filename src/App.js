import React, { useState } from 'react';
import './App.css';

function App() {
  const [dhikrList, setDhikrList] = useState([
    'SubhanAllah',
    'Alhamdulillah',
    'Allahu Akbar',
    'Astagfirullah'
  ]);

  const [selectedDhikr, setSelectedDhikr] = useState(dhikrList[0]);
  const [counts, setCounts] = useState({
    SubhanAllah: 0,
    Alhamdulillah: 0,
    'Allahu Akbar': 0,
    Astagfirullah: 0
  });

  const [newDhikr, setNewDhikr] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDhikrSelect = (dhikr) => {
    setSelectedDhikr(dhikr);
    setMessage('');
  };

  const increment = () => {
    const newCount = counts[selectedDhikr] + 1;
    const updatedCounts = { ...counts, [selectedDhikr]: newCount };
    setCounts(updatedCounts);

    if (newCount === 33) {
      setMessage(`✨ ${selectedDhikr} completed!`);
    } else {
      setMessage('');
    }
  };

  const reset = () => {
    const updatedCounts = { ...counts, [selectedDhikr]: 0 };
    setCounts(updatedCounts);
    setMessage('');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddDhikr = () => {
    const trimmed = newDhikr.trim();
    if (trimmed && !dhikrList.includes(trimmed)) {
      setDhikrList([...dhikrList, trimmed]);
      setCounts({ ...counts, [trimmed]: 0 });
      setNewDhikr('');
    }
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '☀️ Day Mode' : '🌙 Night Mode'}
      </button>

      <h1 className="title">🕌 Tasbih Counter 🕌</h1>

      {/* Custom Dhikr Input */}
      <div className="add-dhikr">
        <input
          type="text"
          value={newDhikr}
          onChange={(e) => setNewDhikr(e.target.value)}
          placeholder="Enter custom dhikr"
        />
        <button onClick={handleAddDhikr}>Add</button>
      </div>

      <div className="dhikr-selector">
        {dhikrList.map((dhikr) => (
          <button
            key={dhikr}
            onClick={() => handleDhikrSelect(dhikr)}
            className={`dhikr-button ${selectedDhikr === dhikr ? 'active' : ''}`}
          >
            {dhikr}
          </button>
        ))}
      </div>

      <h2 className="selected-dhikr">Selected: {selectedDhikr}</h2>
      <div className="count">{counts[selectedDhikr]}</div>

      <div className="button-group">
        <button className="button" onClick={increment}>Count</button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>

      {message && <div className="message">{message}</div>}
      <footer className="footer">
        <p>Designed and Developed by NASIF KABIR</p>
      </footer>
    </div>
    
  );
}

export default App;
