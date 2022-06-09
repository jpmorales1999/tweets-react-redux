import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'

import LogoRedux from '../assets/img/redux.png'

// Redux 

import { useDispatch } from 'react-redux' // Nos permite ejecutar las acciones 
import { openCloseAddTweetModalAction } from '../actions/modalsActions' // Importamos la acción que necesitamos

export default function MenuTop() {

  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch()

  const openCloseAddTweetModal = (state) => {
    dispatch(openCloseAddTweetModalAction(state)) // Nuestra función recibira el nuevo estado y se lo vamos a pasar a dispatch y a la acción openCloseAddTweetModalAction le pasaremos el nuevo estado para poder actualizarlo mediante el reducer
  }

  // Función que ejecutará lo anterior
  const openModal = () => {
    openCloseAddTweetModal(true)
  }

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <img 
            alt="Tweets Simulator Redux"
            src={LogoRedux} 
            width="30"
            height="30"
            className="d-inline-block align-top mx-2"
          />
          Tweets Simulator REDUX
        </Navbar.Brand>
        <Button
          onClick={openModal}
          variant='outline-success'
        >
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  )
}
