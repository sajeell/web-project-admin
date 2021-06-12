import './Dashboard.scss'

export default function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <div className='breadcrumb'>
                <span>Dashboard</span>
            </div>
            <div className='dashboard-welcome'>
                <span className='dashboard-welcome-item'>Welcome,</span>
                <span className='dashboard-welcome-item'>Sajeel Ahmad</span>
            </div>

            <div className='dashboard-exams'>
                <div className='dashboard-exams-heading'>
                    <span>Add Exam</span>
                </div>
                <div className="add-exam">
                    <div className="add-exam-row">
                        <div className="add-exam-row-left">
                            <span>Title:</span>
                        </div>
                        <div className="add-exam-row-right">
                            <input type="text" name="title" id="title" placeholder="e.g. Data Structures & Algorithm" />
                        </div>
                    </div>
                    <div className="add-exam-row">
                        <div className="add-exam-row-left">
                            <span>Cost:</span>
                        </div>
                        <div className="add-exam-row-right">
                            <input type="number" name="cost" id="cost" placeholder="e.g. 450" />
                        </div>
                    </div>
                    <div className="add-exam-row">
                        <div className="add-exam-row-left">
                            <span>Author:</span>
                        </div>
                        <div className="add-exam-row-right">
                            <input type="text" name="author" id="author" placeholder="e.g. Dr. David Gustavo" />
                        </div>
                    </div>
                    <div className="add-exam-row">
                        <div className="add-exam-row-left">
                            <span>Pre-requisites:</span>
                        </div>
                        <div className="add-exam-row-right">
                            <input type="text" name="prereq" id="prereq" placeholder="e.g. Coding" />
                        </div>
                    </div>
                    <div className="add-exam-row">
                        <div className="add-exam-row-left">
                            <span>Benefits:</span>
                        </div>
                        <div className="add-exam-row-right">
                            <input type="text" name="benefits" id="benefits" placeholder="e.g. Highly paid job" />
                        </div>
                    </div>
                    <div className="add-exam-row">
                        <div className="add-exam-row-left">
                            <span>Number of questions:</span>
                        </div>
                        <div className="add-exam-row-right">
                            <input type="text" name="numOfQuestions" id="numOfQuestions" placeholder="e.g. 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}