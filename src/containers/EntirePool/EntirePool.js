import React, { useState } from 'react'
import SinglePoll from '../../components/SinglePoll/SinglePoll'
import Button from '../../components/UI/Button/Button'
import classes from './EntirePool.module.css'


function EntirePool() {
    const [questions, setquestions] = useState([ {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'have horrible short term memory',
        },
        optionTwo: {
          votes: [],
          text: 'have horrible long term memory'
        }
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['johndoe', 'sarahedo'],
          text: 'become a supervillian'
        }
      },
      {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: 'be telekinetic',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be telepathic'
        }
      },
      {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: 'be a front-end developer',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be a back-end developer'
        }
      },
      {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
          votes: ['tylermcginnis'],
          text: 'find $50 yourself',
        },
        optionTwo: {
          votes: ['johndoe'],
          text: 'have your best friend find $500'
        }
      },
      {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
          votes: ['johndoe'],
          text: 'write JavaScript',
        },
        optionTwo: {
          votes: ['tylermcginnis'],
          text: 'write Swift'
        }
      }
    ])
    const [anwsered, setanwsered] = useState(true)

    const toggleAnswered = () => {
        if(anwsered) return
        setanwsered(prevState => true)
    }
    const toggleUnAnswered = () => {
        if(!anwsered) return
        setanwsered(prevState => false)
    }

    
       
    const dummyLogin = 'johndoe'
    let filteredQuestions = questions.filter(singleObject => singleObject.optionOne.votes.includes(dummyLogin) 
                                                | singleObject.optionTwo.votes.includes(dummyLogin))
    if(!anwsered){
        filteredQuestions = questions.filter(singleObject => !singleObject.optionOne.votes.includes(dummyLogin) 
                                                && !singleObject.optionTwo.votes.includes(dummyLogin))
    }

    return (
        
        <div className={classes.EntirePool}>
            <div className={classes.Headers} tabIndex="1" onClick={toggleAnswered} > Anwsered </div> | <div className={classes.Headers} tabIndex="1" onClick={toggleUnAnswered}> Unanwsered </div>
            {console.log(filteredQuestions)}
            <div className={classes.TableArea}>
                {React.Children.toArray(
                    filteredQuestions.map(question => <SinglePoll 
                                                    author={question.author} 
                                                    optionOne={question.optionOne.text} 
                                                    optionTwo={question.optionTwo.text} 
                                                    />)
                )}
            </div>
        </div>
    )
}

export default EntirePool