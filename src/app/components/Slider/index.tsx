'use client'

import Glide from '@glidejs/glide';
import { useEffect } from 'react'

export default function Slider() {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 4,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    })
    glide.mount()
  }, [])

  return (
    <div className="glide">
      <div data-glide-el="track" className="glide__track">
        <ul className="glide__slides">
          <li className="glide__slide">a</li>
          <li className="glide__slide">b</li>
          <li className="glide__slide">c</li>
        </ul>
      </div>
    </div>
  )
}
