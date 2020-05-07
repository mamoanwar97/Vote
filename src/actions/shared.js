import { getInitialData } from '../utils/api'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { addUserQuestion, saveUserAnswer, receiveUsers } from './users'
import { addQuestion, receiveQuestions, saveQuestionAnswer } from './questions'
import {setAuthedUser} from './auth'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTH_ID = 'sarahedo';

export function handleInitialData() {
    return (dispatch) => {
      dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions})=> {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTH_ID))
                dispatch(hideLoading())


        })
    }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(authedUser, question.id))
        })

    }
}

export function handleAnswer (qid, option) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const info = {
        authedUser: authedUser,
        qid,
        answer: option
      };
      _saveQuestionAnswer(info)
          .then(() => {
              dispatch(saveQuestionAnswer(authedUser, qid, option));
              dispatch(saveUserAnswer(authedUser, qid, option))
          })
    }
}
