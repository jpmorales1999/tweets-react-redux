import React from 'react'
import { Container } from 'react-bootstrap'

// Components

import MenuTop from './components/MenuTop'
import Modal from './components/Modal'
import FormAddTweet from './components/FormAddTweet'
import TweetList from './components/TweetList'

// Redux 

/* Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Es un patrón para el manejo de la información (Exactamente el estado)

Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a edición en vivo combinado con un depurador sobre una línea de tiempo.

*/

import store from './store'
import { Provider } from 'react-redux' // Nos permitirá envolver la aplicación y acceder al store desde cualquier sitio

function App() {
  return (
    <Provider store={store}> {/* Al provider le pasamos nuestro store */ }
      <MenuTop />
      <Container className='mt-5'>
        <h1 className='text-center'>Tweets</h1>
        <TweetList />
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
  );
}

export default App;
