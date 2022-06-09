import React from 'react'
import { Card, Button } from 'react-bootstrap'

// Redux

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// Actions

import { deleteTweetAction } from '../actions/tweetsActions'

export default function TweetList() {

  const dispatch = useDispatch()

  const deleteTweet = (state) => {
    dispatch(deleteTweetAction(state))
  }

  // Obtener los tweets desde el state (Store)
  const tweets = useSelector(state => state.tweets.tweets)

  return (
    tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} deleteTweet={deleteTweet} />
    ))
  )
}

function Tweet(props) {
    const { tweet, deleteTweet } = props

    return (
        <Card
            className='mb-3 mt-3'
        >
            <Card.Body>
                <Card.Title> {tweet.name} </Card.Title>
                <Card.Text> {tweet.tweet} </Card.Text>
                <Button 
                    onClick={() => deleteTweet(tweet.id)}
                    variant='danger'
                >
                    Eliminar
                </Button>
            </Card.Body>
        </Card>
    )
}
