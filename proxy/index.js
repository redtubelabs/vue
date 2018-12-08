const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

const HTTPClient = axios.create({
  baseURL: 'https://api.redtube.com',
  params: {
    data: 'redtube.Videos.searchVideos',
    output: 'json',
    thumbsize: 'medium'
  }
})

app.use(cors())
app.get('/', async (req, res) => {
  const { query } = req
  const { data: redtubeResponse } = await HTTPClient.get('/', { params: query })
  console.log('* Redtube response', redtubeResponse)
  res.json(redtubeResponse)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Proxy running on', PORT))