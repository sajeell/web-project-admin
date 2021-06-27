import { useState } from 'react'
import { useQuery, useMutation } from 'urql'

import QuizTable from './quizTable/QuizTable'

import './Dashboard.scss'

export default function Dashboard() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [preReq, setPreReq] = useState('')
  const [benefits, setBenefits] = useState('')
  const [cost, setCost] = useState(0)
  const [numOfQuestions, setNumOfQuestions] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)

  const [questionTitle, setQuestionTitle] = useState('')
  const [choice1, setChoice1] = useState('')
  const [choice2, setChoice2] = useState('')
  const [choice3, setChoice3] = useState('')
  const [choice4, setChoice4] = useState('')
  const [isChoice1Correct, setIsChoice1Correct] = useState(false)
  const [isChoice2Correct, setIsChoice2Correct] = useState(false)
  const [isChoice3Correct, setIsChoice3Correct] = useState(false)
  const [isChoice4Correct, setIsChoice4Correct] = useState(false)

  const questionNumber = []

  for (let i = 1; i < numOfQuestions; i++) {
    questionNumber.push(i)
  }

  const addQuiz = `
      mutation ($title: String, $author: String, $total_questions: Int, $pre_req: String, $price: Int, $benefits: String) {
        addQuiz (data: {title: $title, author: $author, total_questions: $total_questions, pre_req: $pre_req, price: $price, benefits: $benefits})
      }
  `

  const addQuestion = `
    mutation ( $quiz_id: Int
               $title: String
               $choice_1: String
               $choice_2: String
               $choice_3: String
               $choice_4: String
               $isChoice1Correct: Boolean
               $isChoice2Correct: Boolean
               $isChoice3Correct: Boolean
               $isChoice4Correct: Boolean
             ) {
               addQuestion(data: {
                   quiz_id: $quiz_id 
                   title: $title
                   choice_1: $choice_1
                   choice_2: $choice_2
                   choice_3: $choice_3
                   choice_4: $choice_4
                   isChoice1Correct: $isChoice1Correct
                   isChoice2Correct: $isChoice2Correct
                   isChoice3Correct: $isChoice3Correct
                   isChoice4Correct: $isChoice4Correct
               })
             }
  `

  const [addQuizResponse, addQuizMutation] = useMutation(addQuiz)
  const [addQuestionResponse, addQuestionMutation] = useMutation(addQuestion)

  const uploadQuiz = () => {
    try {
      const variables = {
        title: title,
        author: author,
        total_questions: parseInt(numOfQuestions),
        pre_req: preReq,
        price: parseInt(cost),
        benefits: benefits
      }

      addQuizMutation(variables).then((result) => {
        localStorage.setItem('numOfQuestions', numOfQuestions)
        if (result.data) {
          localStorage.setItem('quizId', result.data.addQuiz)
        }
        alert('Quiz added Successfully')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const uploadQuestion = () => {
    try {
      const variables = {
        quiz_id: parseInt(localStorage.getItem('quizId')),
        title: questionTitle,
        choice_1: choice1,
        choice_2: choice2,
        choice_3: choice3,
        choice_4: choice4,
        isChoice1Correct: isChoice1Correct,
        isChoice2Correct: isChoice2Correct,
        isChoice3Correct: isChoice3Correct,
        isChoice4Correct: isChoice4Correct
      }

      addQuestionMutation(variables).then((result) => {
        if (typeof result.error === 'undefined') {
          setQuestionTitle('')
          setChoice1('')
          setChoice2('')
          setChoice3('')
          setChoice4('')
          setIsChoice1Correct(false)
          setIsChoice2Correct(false)
          setIsChoice3Correct(false)
          setIsChoice4Correct(false)
          alert("Success!")
        } else {
          alert("Success!")
        }
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="dashboard-wrapper">
      <div className="breadcrumb">
        <span>Dashboard</span>
      </div>
      <div className="dashboard-welcome">
        <span className="dashboard-welcome-item">Welcome,</span>
        <span className="dashboard-welcome-item">Sajeel Ahmad</span>
      </div>

      <div className="dashboard-exams">
        <div className="dashboard-exams-heading">
          <span>Add Exam</span>
        </div>
        <div className="add-exam">
          <div className="add-exam-row">
            <div className="add-exam-row-left">
              <span>Title:</span>
            </div>
            <div className="add-exam-row-right">
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                placeholder="e.g. Data Structures & Algorithm"
              />
            </div>
          </div>
          <div className="add-exam-row">
            <div className="add-exam-row-left">
              <span>Cost:</span>
            </div>
            <div className="add-exam-row-right">
              <input
                type="number"
                name="cost"
                id="cost"
                placeholder="e.g. 450"
                value={cost}
                onChange={(e) => {
                  if (e.target.value < 0) {
                    return
                  }
                  setCost(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="add-exam-row">
            <div className="add-exam-row-left">
              <span>Author:</span>
            </div>
            <div className="add-exam-row-right">
              <input
                type="text"
                name="author"
                id="author"
                placeholder="e.g. Dr. David Gustavo"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="add-exam-row">
            <div className="add-exam-row-left">
              <span>Pre-requisites:</span>
            </div>
            <div className="add-exam-row-right">
              <input
                type="text"
                name="prereq"
                id="prereq"
                placeholder="e.g. Coding"
                value={preReq}
                onChange={(e) => {
                  setPreReq(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="add-exam-row">
            <div className="add-exam-row-left">
              <span>Benefits:</span>
            </div>
            <div className="add-exam-row-right">
              <input
                type="text"
                name="benefits"
                id="benefits"
                placeholder="e.g. Highly paid job"
                value={benefits}
                onChange={(e) => {
                  setBenefits(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="add-exam-row">
            <div className="add-exam-row-left">
              <span>Number of questions:</span>
            </div>
            <div className="add-exam-row-right">
              <input
                type="number"
                name="numOfQuestions"
                id="numOfQuestions"
                placeholder="e.g. 4"
                value={numOfQuestions}
                onChange={(e) => {
                  if (e.target.value < 0) {
                    return
                  }
                  setNumOfQuestions(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="add-exam-row">
            <input
              type="submit"
              name="submit-btn"
              id="submit-btn"
              value="Submit"
              onClick={uploadQuiz}
            />
          </div>
        </div>
        {numOfQuestions == 0 ? <div>
          <h4>No Questions to be linked</h4>
        </div> :
          <div>
            <div className="dashboard-exams-heading">
              <span>Link Questions</span>
            </div>
            <div className="link-question">
              <div className="add-question-row">
                <div className="add-question-row-left">
                  <span>Question {currentQuestionIndex}:</span>
                </div>
                <div className="add-question-row-right">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. What is a hook?"
                    value={questionTitle}
                    onChange={(e) => {
                      setQuestionTitle(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="add-choice-row">
                <div className="add-choice-row-left">
                  <span>Choice 1:</span>
                </div>
                <div className="add-choice-row-middle">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. What is a hook?"
                    value={choice1}
                    onChange={(e) => {
                      setChoice1(e.target.value)
                    }}
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
                      checked={isChoice1Correct}
                      onChange={() => {
                        setIsChoice1Correct(!isChoice1Correct)
                      }}
                    ></input>
                  </div>
                  <div className="add-choice-row-right-row">
                    <span>Correct</span>
                  </div>
                </div>
              </div>
              <div className="add-choice-row">
                <div className="add-choice-row-left">
                  <span>Choice 2:</span>
                </div>
                <div className="add-choice-row-middle">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. What is a hook?"
                    value={choice2}
                    onChange={(e) => {
                      setChoice2(e.target.value)
                    }}
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
                      checked={isChoice2Correct}
                      onChange={() => {
                        setIsChoice2Correct(!isChoice2Correct)
                      }}
                    ></input>
                  </div>
                  <div className="add-choice-row-right-row">
                    <span>Correct</span>
                  </div>
                </div>
              </div>
              <div className="add-choice-row">
                <div className="add-choice-row-left">
                  <span>Choice 3:</span>
                </div>
                <div className="add-choice-row-middle">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. What is a hook?"
                    value={choice3}
                    onChange={(e) => {
                      setChoice3(e.target.value)
                    }}
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
                      checked={isChoice3Correct}
                      onChange={() => {
                        setIsChoice3Correct(!isChoice3Correct)
                      }}
                    ></input>
                  </div>
                  <div className="add-choice-row-right-row">
                    <span>Correct</span>
                  </div>
                </div>
              </div>
              <div className="add-choice-row">
                <div className="add-choice-row-left">
                  <span>Choice 4:</span>
                </div>
                <div className="add-choice-row-middle">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="e.g. What is a hook?"
                    value={choice4}
                    onChange={(e) => {
                      setChoice4(e.target.value)
                    }}
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
                      checked={isChoice4Correct}
                      onChange={() => {
                        setIsChoice4Correct(!isChoice4Correct)
                      }}
                    ></input>
                  </div>
                  <div className="add-choice-row-right-row">
                    <span>Correct</span>
                  </div>
                </div>
              </div>
              <div className="add-choice-row">
                <input
                  type="submit"
                  name="submit-btn"
                  id="submit-btn"
                  value={numOfQuestions - 1 === currentQuestionIndex - 1 ? "Submit" : "Next Question"}
                  onClick={(e) => {
                    e.preventDefault()
                    uploadQuestion()
                    if (numOfQuestions - 1 === currentQuestionIndex - 1) {
                      setNumOfQuestions(0)
                      return
                    }
                    if (currentQuestionIndex <= numOfQuestions - 1) {
                      setCurrentQuestionIndex(currentQuestionIndex + 1)
                    }
                  }}
                />
              </div>
            </div>
          </div>
        }
      </div>

      <QuizTable />
    </div>
  )
}
