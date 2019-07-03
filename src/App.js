import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import pages from './pages'

import logo from './assets/logo.svg'

console.log(pages)

for (const page in pages) {
  console.log(page)
}

function App() {
  // const [data, setData] = useState(null)

  // const userID = '4261235830'
  // const token = '4261235830.a3cdfcd.e54fa101ce334dbc8391e7a0d60c4740'

  // useEffect(() => {
  //   fetch(
  //     `https://api.instagram.com/v1/users/${userID}/media/recent/?access_token=${token}`
  //   )
  //     .then(response => response.json())
  //     .then(result => {
  //       setData(result)
  //     })
  // }, [])

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={pages.home} />
          <Route path='/contact' component={pages.contact} />
          {Object.entries(pages).map(([name, C], index) => (
            <Route key={index} path={`/${name}`} component={C} />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
