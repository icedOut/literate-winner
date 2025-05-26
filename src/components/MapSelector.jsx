const maps = [
  'Kafe Dostoyevsky',
]

function MapSelector({ value, onChange }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Select a map --</option>
      {maps.map(map => (
        <option key={map} value={map}>{map}</option>
      ))}
    </select>
  )
}

export default MapSelector
