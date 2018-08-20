const hexify = function(color) {
  var values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',')
  const a = parseFloat(values[3] || 1)
  const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255)
  const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255)
  const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)

  const HexData = {}
  HexData.color = '#' +
  ('0' + r.toString(16)).slice(-2) +
  ('0' + g.toString(16)).slice(-2) +
  ('0' + b.toString(16)).slice(-2)
  HexData.opacity = a * 100
  return HexData
}

export default hexify
