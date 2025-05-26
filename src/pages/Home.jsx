import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const maps = ['Bank', 'Oregon', 'Kafe Dostoyevsky']

function Home() {
  const [selectedMap, setSelectedMap] = useState('')
  const navigate = useNavigate()

  const startGame = () => {
    if (selectedMap) {
      navigate(`/game?map=${encodeURIComponent(selectedMap)}`)
    }
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Rainbow 6 Siege GeoGuessr</h1>
      <select value={selectedMap} onChange={e => setSelectedMap(e.target.value)}>
        <option value="">-- Select a map --</option>
        {maps.map(map => (
          <option key={map} value={map}>{map}</option>
        ))}
      </select>
      <br /><br />
      <button onClick={startGame} disabled={!selectedMap}>Start Game</button>
    </div>
  )
}

export default Home
