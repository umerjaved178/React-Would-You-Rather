import React, { useEffect, useState } from 'react'
import SinglePoll from '../../components/SinglePoll/SinglePoll'
import classes from './EntirePool.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import {firebaseDataFetch, toggleAnswer} from '../../redux/slices/EntirePoolSlice'


function EntirePool() {
    const questions = useSelector(state => state.EntirePool.fetchedData)
    const answered = useSelector(state => state.EntirePool.answered)
    const dispatch = useDispatch()
    //   [ 
    //   {
    //     id: '8xf0y6ziyjabvozdd253nd',
    //     author: 'sarahedo',
    //     timestamp: 1467166872634,
    //     optionOne: {
    //       votes: ['sarahedo'],
    //       text: 'have horrible short term memory',
    //     },
    //     optionTwo: {
    //       votes: [],
    //       text: 'have horrible long term memory'
    //     }
    //   },
    //   {
    //     id: '6ni6ok3ym7mf1p33lnez',
    //     author: 'johndoe',
    //     timestamp: 1468479767190,
    //     optionOne: {
    //       votes: [],
    //       text: 'become a superhero',
    //     },
    //     optionTwo: {
    //       votes: ['johndoe', 'sarahedo'],
    //       text: 'become a supervillian'
    //     }
    //   },
    //   {
    //     id: 'am8ehyc8byjqgar0jgpub9',
    //     author: 'sarahedo',
    //     timestamp: 1488579767190,
    //     optionOne: {
    //       votes: [],
    //       text: 'be telekinetic',
    //     },
    //     optionTwo: {
    //       votes: ['sarahedo'],
    //       text: 'be telepathic'
    //     }
    //   },
    //   {
    //     id: 'loxhs1bqm25b708cmbf3g',
    //     author: 'tylermcginnis',
    //     timestamp: 1482579767190,
    //     optionOne: {
    //       votes: [],
    //       text: 'be a front-end developer',
    //     },
    //     optionTwo: {
    //       votes: ['sarahedo'],
    //       text: 'be a back-end developer'
    //     }
    //   },
    //   {
    //     id: 'vthrdm985a262al8qx3do',
    //     author: 'tylermcginnis',
    //     timestamp: 1489579767190,
    //     optionOne: {
    //       votes: ['tylermcginnis'],
    //       text: 'find $50 yourself',
    //     },
    //     optionTwo: {
    //       votes: ['johndoe'],
    //       text: 'have your best friend find $500'
    //     }
    //   },
    //   {
    //     id: 'xj352vofupe1dqz9emx13r',
    //     author: 'johndoe',
    //     timestamp: 1493579767190,
    //     optionOne: {
    //       votes: ['johndoe'],
    //       text: 'write JavaScript',
    //     },
    //     optionTwo: {
    //       votes: ['tylermcginnis'],
    //       text: 'write Swift'
    //     }
    //   }
    // ]

    useEffect(() => {
      dispatch(firebaseDataFetch())
    }, [])
    
    

    const toggleAnswered = () => {
        if(answered) return
        dispatch(toggleAnswer())
    }
    const toggleUnAnswered = () => {
        if(!answered) return
        dispatch(toggleAnswer())
    }

    // const voteHandler = (id, selectedOption, voter) => {
    //   let url = `/questions/${id}/${selectedOption}/votes.json`
    //   axios.get(url).then(res=> 
    //     axios.put(url, res.data.concat(voter))
    //   )
    // }

       
    const dummyLogin = 'johndoe'
    // sarahedo johndoe
    let resultButton = answered ? 'Results' : 'Vote'

    let displayContent = <Spinner />
    if(questions){
          var filteredQuestions = questions.filter(singleObject => 
            (singleObject.optionOne.votes ? singleObject.optionOne.votes.includes(dummyLogin) : false) 
            | (singleObject.optionTwo.votes ? singleObject.optionTwo.votes.includes(dummyLogin) : false)
            )

          if(!answered){ 
            filteredQuestions = questions.filter(singleObject => 
              (singleObject.optionOne.votes ? !singleObject.optionOne.votes.includes(dummyLogin) : true)
              && (singleObject.optionTwo.votes? !singleObject.optionTwo.votes.includes(dummyLogin) : true))
            }

          displayContent = React.Children.toArray(
                            filteredQuestions.map(question => <SinglePoll 
                                                                  id={question.id}
                                                                  dummyLogin={dummyLogin}
                                                                  author={question.author} 
                                                                  optionOne={question.optionOne.text} 
                                                                  optionTwo={question.optionTwo.text}
                                                                  optionOneVotes={question.optionOne.votes ? question.optionOne.votes.length : 0}
                                                                  optionTwoVotes={question.optionTwo.votes ? question.optionTwo.votes.length : 0} 
                                                                  resultButton={resultButton}
                                                                  selectedOption={(question.optionOne.votes && question.optionOne.votes.includes(dummyLogin)) ? "selected_1" : "selected_2"}
                                                                  />)
                                                                )
    } 

    return (
        <div className={classes.EntirePool}>
          {console.log(answered)}
            <div className={classes.Headers} tabIndex="1" onClick={toggleAnswered} > Anwsered </div> | <div className={classes.Headers} tabIndex="1" onClick={toggleUnAnswered}> Unanwsered </div>
            <div className={classes.TableArea}>
                {displayContent}
            </div>
        </div>
    )
}

export default EntirePool
