import { Box } from '@mui/material'
import React, { useState, UseEffect, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from './utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data.items))
  }, [id])

  

  return (
    <Box minHeight='95vh' >
      <Box style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(115,37,76,0.9948354341736695) 35%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px' }}>
      </Box>
      <ChannelCard channelDetail={channelDetail} marginTop= '-110px' />
      <Box p={2} display='flex'>
        <Box  sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail