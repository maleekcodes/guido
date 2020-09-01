import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default function Nav() {
	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">Guido</NavbarBrand>
		</Navbar>
	);
}
