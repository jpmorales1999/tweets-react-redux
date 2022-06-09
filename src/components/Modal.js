import React from 'react'
import { Modal as ModalB } from 'react-bootstrap'

// Redux

// Use Dispatch nos permitirá cerrar el modal y el Selector nos permitirá acceder al valor del estado del modal
import { useDispatch, useSelector } from 'react-redux'

// Importamos nuestra acción
import { openCloseAddTweetModalAction } from '../actions/modalsActions'

export default function Modal(props) {
  const { children } = props

  // Distpatch para ejecutar nuestras acciones
  const dispatch = useDispatch()

  const closeModal = (state) => {
    dispatch(openCloseAddTweetModalAction(state))
  }

  // Acceder a un valor en el store
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet)

  return (
    <ModalB
        show={isOpenModal}
        onHide={() => closeModal(false)}
        size='lg'
        centered
    >
        {children}
    </ModalB>
  )
}
