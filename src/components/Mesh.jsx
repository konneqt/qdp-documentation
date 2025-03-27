import React, { useEffect, useRef, useState } from 'react'

export default function SquareMesh() {
  const svgEl = useRef()
  const pathsGroup = useRef()
  const [colorMode, setColorMode] = useState('light')
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Helper function for line color
  function setLineColor(theme) {
    return theme !== 'dark' 
      ? 'rgba(52, 132, 252, 0.1)' 
      : 'rgba(138, 157, 209, 0.15)'
  }

  // Function to update dimensions
  const updateDimensions = () => {
    if (svgEl.current) {
      const width = window.innerWidth
      const height = window.innerHeight
      setDimensions({ width, height })
    }
  }

  // Toggle color mode (simulating theme switch)
  const toggleColorMode = () => {
    setColorMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
  }

  // Set up resize listener
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Create square mesh based on dimensions
  useEffect(() => {
    if (!pathsGroup.current || dimensions.width === 0) return
    
    // Clear previous paths
    while (pathsGroup.current.firstChild) {
      pathsGroup.current.removeChild(pathsGroup.current.firstChild)
    }

    // Define square size
    const squareSize = 20
    
    // Calculate number of squares needed
    const cols = Math.ceil(dimensions.width / squareSize) + 2
    const rows = Math.ceil(dimensions.height / squareSize) + 2

    // Create squares
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Vertical lines
        const verticalPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        verticalPath.setAttribute('d', `M${x * squareSize},${y * squareSize} L${x * squareSize},${(y + 1) * squareSize}`)
        verticalPath.setAttribute('stroke', setLineColor(colorMode))
        verticalPath.setAttribute('stroke-width', '0.4')
        verticalPath.setAttribute('fill', 'none')
        pathsGroup.current.appendChild(verticalPath)

        // Horizontal lines
        const horizontalPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        horizontalPath.setAttribute('d', `M${x * squareSize},${y * squareSize} L${(x + 1) * squareSize},${y * squareSize}`)
        horizontalPath.setAttribute('stroke', setLineColor(colorMode))
        horizontalPath.setAttribute('stroke-width', '0.4')
        horizontalPath.setAttribute('fill', 'none')
        pathsGroup.current.appendChild(horizontalPath)
      }
    }
  }, [colorMode, dimensions])

  // Update colors when theme changes
  useEffect(() => {
    if (pathsGroup.current) {
      const paths = pathsGroup.current.querySelectorAll('path')
      paths.forEach(path => {
        path.setAttribute('stroke', setLineColor(colorMode))
      })
    }
  }, [colorMode])

  return (
    <>
      <svg
        ref={svgEl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
        viewBox={`0 0 1225 1500`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g ref={pathsGroup} />
      </svg>
    </>
  )
}