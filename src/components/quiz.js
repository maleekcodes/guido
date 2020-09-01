import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container } from 'reactstrap';
import Question from './Question';
import Result from './Result';

export default function Quiz() {
	const { id } = useParams();
	const [ quiz, setQuiz ] = useState();
	const [score, setScore] = useState(0);
	const [responses, setResponses] = useState(0);

	useEffect(
		() => {
			const fetchQuiz = () => {
				axios
					.get(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy`)
					.then((response) => setQuiz(response.data.results))
					.catch((error) => console.log(error));
			};

			fetchQuiz();
		},
		[ id ]
	);
	const handleSelected = (answer, correct) => {
		if (answer === correct) {
			setScore(score + 1);
		}

		setResponses(responses < 10 ? responses + 1 : 10);
	}

	return (
		<div>
			
			<Container className="pt-5">
				{quiz === undefined && (
					<div className="spinner-border mt-5" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				)}
				<div className="p-5">
					{quiz !== undefined && <h1>Quiz</h1>} 
						{responses < 10 && quiz &&
							quiz.map((q, index) => {
								return (
									<Question 
									question={q.question} 
									options={q.incorrect_answers} 
									key={index} 
									index={index + 1} 
									correct={q.correct_answer}
									selected={answer => handleSelected(answer, q.correct_answer)} />
								);
							})}


							{responses === 10 ? (<Result score={score} />) : null}

				</div>
			</Container>
		</div>
	);
}
