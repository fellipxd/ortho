import React, { useState } from 'react'
import walls2 from '../../assets/wall2.png'
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
        <img src={walls2} alt='rule them all' className="big_img" />
      </ImgWrapper>
    </Wrapper>
  )
}
