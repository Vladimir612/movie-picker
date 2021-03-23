import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright 2021 &copy; Vladimir Lazarevic</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: #131d29;
  color: #fff;
  width: 100%;
  height: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Footer
