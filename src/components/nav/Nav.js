import React from 'react'
import ortho from '../../assets/ortho.png'
import { Wrapper } from './navStyled'
export const Nav = () => {
  return (
    <Wrapper>
     <img src={ortho} alt="ortho"/>
     <button>
         What We Are Building
     </button>
    </Wrapper>
  )
}
