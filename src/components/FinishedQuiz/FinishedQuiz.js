import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>
                        1.
                    </strong>
                        How r u?
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>
                        1.
                    </strong>
                        How r u?
                    <i className={'fa fa-check ' + classes.sucsess}/>
                </li>
            </ul>

            <p>Right 4 of 10</p>

            <div>
                <button>One more time</button>
            </div>
        </div>
    )
}

export default FinishedQuiz