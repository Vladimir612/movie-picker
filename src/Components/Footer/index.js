import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <h1>This is footer</h1>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Footer
