import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/Book' activeStyle>
			Book Details
		</NavLink>
		<NavLink to='/Character' activeStyle>
			Character Details
		</NavLink>
		<NavLink to='/Houses' activeStyle>
			House Details
		</NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
