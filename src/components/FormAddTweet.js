import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { v4 } from 'uuid'
import moment from 'moment'

// Redux

import { useDispatch, useSelector } from 'react-redux'

// Actions

import { validationFormAddTweetAction } from '../actions/validationsActions'
import { addTweetAction } from '../actions/tweetsActions'
import { openCloseAddTweetModalAction } from '../actions/modalsActions'

export default function FormAddTweet() {

    const [formValue, setFormValue] = useState({
        name: "",
        tweet: ""
    })

    // Inicialización del Dispatch
    const dispatch = useDispatch()

    const errorForm = (state) => {
        dispatch(validationFormAddTweetAction(state))
    }

    const addTweet = (state) => {
        dispatch(addTweetAction(state))
    }

    const closeModal = (state) => {
        dispatch(openCloseAddTweetModalAction(state))
    }

    // Obtener estado de la validación del formulario
    const errorFormValue = useSelector(state => state.validations.errorFormAddTweet)

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        
        const { name, tweet } = formValue

        if (!name || !tweet) {
            errorForm(true)
        } else {
            errorForm(false)
            addTweet({
                id: v4(),
                name,
                tweet,
                date: moment()
            })
            closeModal(false)
        }
    }

    return (
        <Form
            onSubmit={onSubmit}
            onChange={onChange}
            className='m-3'
        >
           <Form.Group className='text-center mb-3'>
               <h1>Nuevo Tweet</h1>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Control type='text' name='name' placeholder='Escribe tú nombre...' />
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Control as='textarea' name='tweet' placeholder='Escribe tú Tweet...' row='3' />
           </Form.Group>
           <Button varian='primary' type='submit'>
                Enviar Tweet
           </Button>

           { errorFormValue && (
               <Alert variant='danger' className='mt-4'>Todos los campos son obligatorios</Alert>
           )}
        </Form>
    )

}
