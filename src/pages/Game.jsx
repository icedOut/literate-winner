import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { imageData } from '../data/imageData'

function Game() {
  const [searchParams] = useSearchParams()
  const selectedMap = searchParams.get('map')

  const filteredImages = imageData.filter(img => img.map === selectedMap)

  const [round, setRound] = useState(0)
  const [selectedSpot, setSelectedSpot] = useState('')
  const [showResult, setShowResult] = useState(false)

  const current = filteredImages[round]

  const allSpots = [...new Set(filteredImages.map(img => img.spot))]

  const handleGuess = () => setShowResult(true)
  const next = () => {
    setRound(prev => (prev + 1) % filteredImages.length)
    setSelectedSpot('')
    setShowResult(false)
  }

  useEffect(() => {
    setRound(0)
    setShowResult(false)
    setSelectedSpot('')
  }, [selectedMap])

  if (!current) return <h2>No images for this map.</h2>

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{selectedMap} - Round {round + 1}</h2>
      <img src={current.image} alt="spot" style={{ maxWidth: '80%' }} />
      <br />
      <select value={selectedSpot} onChange={e => setSelectedSpot(e.target.value)}>
        <option value="">-- Select a spot --</option>
        {allSpots.map(spot => (
          <option key={spot} value={spot}>{spot}</option>
        ))}
      </select>
      <br /><br />
      <button onClick={handleGuess} disabled={!selectedSpot}>Guess</button>

      {showResult && (
        <div>
          <h3>
            {selectedSpot === current.spot
              ? '✅ Correct!'
              : `❌ Wrong! It was "${current.spot}"`}
          </h3>
          <button onClick={next}>Next Spot</button>
        </div>
      )}
    </div>
  )
}

export default Game
