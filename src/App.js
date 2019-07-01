import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const userID = '4261235830'
  const token = '4261235830.a3cdfcd.e54fa101ce334dbc8391e7a0d60c4740'

  useEffect(() => {
    fetch(
      `https://api.instagram.com/v1/users/${userID}/media/recent/?access_token=${token}`
    )
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <code>{JSON.stringify(data, null, 2)}</code>
      </header>
    </div>
  )
}

export default App
