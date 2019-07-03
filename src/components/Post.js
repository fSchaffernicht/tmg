import React from 'react'

export default function Post({ comments, images, likes }) {
  return (
    <div>
      <img src={images.standard_resolution.url} alt='image' />
    </div>
  )
}
