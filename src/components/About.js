import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<Container>
			<Row className="d-flex justify-content-center align-items-center mt-2">
				<Col lg="6" md={9} sm={12} className="text-center">
					<img src="img/illustration.jpg" alt="Lost" className="img-fluid" />
					<h3>Welcome to Guido</h3>
					<p className="text-left">
						This web application provides career guidance and counselling. However, it will be limited to
						providing guidance and counselling to secondary school students.The aim of the portal is as
						follows:
					</p>

					<ul className="text-left">
						<li>
							To establish a relationship between the field or area of guidance and counseling with the
							field of applied science and technology{' '}
						</li>
						<li>
							To help young people gain a better understanding of themselves with the use of Computer
							Assisted Instruction (CAI) program.
						</li>
						<li>
							To educate the students in occupational selections through the means of Computer Assisted
							Instruction (CAI) programs in the present and future.
						</li>
					</ul>

					<Link to="/courses" className="btn btn-primary">
						Get Started
					</Link>
				</Col>
			</Row>
		</Container>
	);
}
