import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Controller = styled.div`
position: fixed;
right: 1rem;
bottom: 1rem;
display: flex;
gap: 1rem;
`

function NavController() {
  return (
    <Controller>
        <Link to="/anaSayfa">Ana Sayfa</Link>
        <Link to="/homes">Homes</Link>
        
    </Controller>
  )
}

export default NavController