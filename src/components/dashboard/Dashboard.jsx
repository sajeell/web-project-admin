import { useState } from 'react'
import './Dashboard.scss'

export default function Dashboard() {
  const [numOfQuestions, setNumOfQuestions] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)
  const [cost, setCost] = useState(0)

  const questionNumber = []


  for (let i = 1; i < numOfQuestions; i++) {
    questionNumber.push(i)
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
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
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
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
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
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
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
                  />
                </div>
                <div className="add-choice-row-right">
                  <div className="add-choice-row-right-row">
                    <input
                      type="radio"
                      id="choice"
                      name="choice"
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
    </div>
  )
}
