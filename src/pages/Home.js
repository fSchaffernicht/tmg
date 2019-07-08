import React from 'react'
import { Grid } from '../components'
import { useFetch } from '../hooks'

import logo from '../assets/logo.svg'

const userID = '4261235830'
const token = '4261235830.a3cdfcd.e54fa101ce334dbc8391e7a0d60c4740'

export default function Home() {
  // const { error, data, loading } = useFetch(
  //   `https://api.instagram.com/v1/users/${userID}/media/recent/?access_token=${token}`
  // )
  const { error, data, loading } = useFetch(`http://localhost:4000`)
  console.log(error, data, loading)
  return (
    <div className='container'>
      <Grid>
        Und es kommt noch ein gemaltes Bild hinzu von einem Arm dessen Hand ein
        Stück vom Himmel abreißt. Bild muss noch erstellt werden. Cooler wäre
        wenn man durch einen Klick die Hand dazu kriegt ein Stück abzureißen und
        dann erscheint das Navigationsmenü aus dem Stück und rechts erscheint
        ein Scrollkasten mit news. Also einfach nur News durch die man scrollen
        kann ohne sichtbaren Kasten. Geht das? Müsste ich die „Animation“
        erstellen? Oder programmiert man sowas. Oder welche frames brauchst du?
      </Grid>
    </div>
  )
}
