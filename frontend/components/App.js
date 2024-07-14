import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto(){
      axios.get(URL)
       .then(res => {
        console.log(res.data)
        setApod(res.data)
       })
       .catch(err => {
        console.log(err.message)
       })
    }
     fetchPhoto()
    setApod(
      {
        "date": "2024-07-13",
        "explanation": "In 1990, cruising four billion miles from the Sun, the Voyager 1 spacecraft looked back to make this first ever Solar System family portrait. The complete portrait is a 60 frame mosaic made from a vantage point 32 degrees above the ecliptic plane. In it, Voyager's wide-angle camera frames sweep through the inner Solar System at the left, linking up with ice giant Neptune, the Solar System's outermost planet, at the far right. Positions for Venus, Earth, Jupiter, Saturn, Uranus, and Neptune are i...",
        "hdurl": "https://apod.nasa.gov/apod/image/2407/ssportrait_vg1_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Solar System Family Portrait",
        "url": "https://apod.nasa.gov/apod/image/2407/ssportrait_vg1.jpg"
      }
    )
    
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
  return (
  <section>
    <Card
    title={apod.title}
    text={apod.explanation}
    imageURL={apod.url}
    date={apod.date}
    />
  </section>
  )
}

export default App
