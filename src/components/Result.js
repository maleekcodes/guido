import React from 'react'
import {Link} from 'react-router-dom';
import { Alert } from 'reactstrap';

export default function Result({score}) {
    const percentage = (score / 10) * 100
    
    return (
        <div>
            {percentage > 70 ? congrats(percentage) : fail(percentage)}
            <Link to="/">Try again</Link>
        </div>
    )
}


const congrats = (percentage) => (
    <Alert color="success">
        Congratulations! Your eligibility status for studying courses in this field is {percentage}%.
        <br />
        Analysis shows that you will perform well. Goodluck!
    </Alert>
)

const fail = (percentage) => (
    <Alert color="danger">
        Sorry! Your eligibility status for studying courses in this field is {percentage}%.
        <br />
        Analysis shows that you will not perform well. Consider choosing a different field.
    </Alert>
)