import React from 'react'
import { Grid } from '../components'
import { useFetch } from '../hooks'

import logo from '../assets/logo.svg'

const userID = '4261235830'
const token = '4261235830.a3cdfcd.e54fa101ce334dbc8391e7a0d60c4740'

export default function Home() {
  const { error, data, loading } = useFetch(
    `https://api.instagram.com/v1/users/${userID}/media/recent/?access_token=${token}`
  )
  console.log('>>>>>', error, data, loading)
  return (
    <div className='container'>
      <Grid>
        <img src={logo} alt='logo' />
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
      <Grid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Grid>
      <Grid>
        <div>1</div>
        <div>2</div>
      </Grid>
      <Grid>
        <div>1</div>
      </Grid>
      <Grid>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Grid>
    </div>
  )
}
