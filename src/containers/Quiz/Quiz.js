import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state= {
        quiz: [
            {
                answers: [
                    {text: 'Queston 1'},
                    {text: 'Queston 2'},
                    {text: 'Queston 3'},
                    {text: 'Queston 4'}
                ]
            }
        ]
    }

    render() {
        return(
            <div className={classes.Quiz}>
               
                <div className={classes.QuizWrapper}>
                    <h1>Answer the questions</h1>
                   <ActiveQuiz                         
                        answers={this.state.quiz[0].answers}
                   /> 
                </div>

            </div>
        )
    }
}
export default Quiz