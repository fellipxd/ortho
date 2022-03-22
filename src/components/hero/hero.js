import React, { useState } from 'react'
import walls from '../../assets/walls.png'
import walls_small from '../../assets/walls_small.png'
import { Desc, ImgWrapper, Wrapper } from './heroStyled'


export const Hero = () => {
  const [fade, setFade] = useState(false)

  console.log(fade)

  return (
    <Wrapper>
      <Desc>
        <div>
          <p className={fade ? "fade" : "clear"}>One SDK to rule them
            <span
              className={fade ? "block" : "line"}
              onClick={() => setFade(!fade)}
              onMouseOverCapture={() => setFade(true)}
              onMouseOutCapture={() => setFade(false)}
            >All</span>
          </p>
        </div>
        <p className="goodby">
          Say goodbye to large developer teams, and inadequate or no maintenance of your SDK. Ortho helps you move fast and at a good cost.
        </p>

        <button>Join The Waitlist</button>


      </Desc>

      <ImgWrapper>
        <img src={walls} alt='rule them all' className="big_img" />
        <img src={walls_small} alt='rule them all' className="small_img" />
      </ImgWrapper>
    </Wrapper>
  )
}
