import { useQuery, useMutation } from 'urql'

import './QuizTable.scss'

export default function QuizTable() {
    const quizQuery = `
        query {
            quiz {
                    id
                    title
                    author
                    price
                    total_questions
                    total_marks
                    createdAt
                 }
              }
    `

    const deleteQuiz = `
      mutation ($id: Int) {
        deleteQuiz (data: {id: $id})
      }
  `

    const [deleteQuizResponse, deleteQuizMutation] = useMutation(deleteQuiz)


    const [result, reexecuteQuery] = useQuery({
        query: quizQuery,
    })

    const { data, fetching, error } = result

    if (fetching) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    const handleDeleteQuiz = (id) => {
        try {
            const variables = {
                id: id
            }

            deleteQuizMutation(variables).then((result) => {
                alert("Success!")
            })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="quiz-table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>S. #</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Total Questions</th>
                        <th>Created On</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.quiz.map((quiz) => (
                        <tr key={quiz.id}>
                            <td>{quiz.id}</td>
                            <td>{quiz.title}</td>
                            <td>{quiz.author}</td>
                            <td>{quiz.total_questions}</td>
                            <td>{quiz.createdAt}</td>
                            <td onClick={(e) => {
                                e.preventDefault()
                                handleDeleteQuiz(quiz.id)
                                window.location.reload()
                            }}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}