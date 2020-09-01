import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Courses(props) {
	const [ state, setState ] = useState({ value: '18' });
	const { history } = props;
	const handleSubmit = (event) => {
		event.preventDefault();
		history.push(`/quiz/${state.value}`);
	};

	const handleChange = (event) => {
		setState({ value: event.target.value });
	};
	return (
		<Container>
			<Row className="d-flex justify-content-center align-items-center mt-2">
				<Col lg="6" md={9} sm={12} className="text-center">
					<img src="img/illustration.jpg" alt="Lost" className="img-fluid" />

					<h3>Choose a Career Track</h3>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<select className="form-control" value={state.value} onChange={handleChange}>
								<option value="12">Entertainment: Music</option>
								<option value="18">Science: Computers</option>
								<option value="19">Science: Mathematics</option>
								<option value="30">Science: Technology</option>
								<option value="20">Mythology</option>
								<option value="21">Sports</option>
								<option value="10">Books</option>
								<option value="28">Vehicles</option>
								<option value="25">Art</option>
								<option value="24">Politics</option>
							</select>
						</div>

						<button type="submit" className="btn btn-primary">
							Continue
						</button>
					</form>
				</Col>
			</Row>
		</Container>
	);
}
