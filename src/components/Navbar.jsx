import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = ({ active, setActive }) => {
	// TODO: understand why Navbar broke when changing from # to paths
	// Patched solution is to compare the page manually...

	const isActive = (href) => href === window.location.pathname ? "true" : "";

	return (
		<Navbar id="top" bg="light" expand="sm" className="mb-4">
			<Navbar.Brand active={isActive("/")} href="/">CPIT221</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" onSelect={setActive}>
					<Nav.Link active={isActive("/writing")} href="/writing">
						Weekly Writing
				</Nav.Link>
					<Nav.Link active={isActive("/buy")} href="/buy">
						Make Me Buy
				</Nav.Link>
					<Nav.Link active={isActive("/values")} href="/values" >
						Values
				</Nav.Link>
					<NavDropdown title="Proposal" id="basic-nav-dropdown">
						<NavDropdown.Item active={isActive("/proposal/ours")} href="/proposal/ours">Our Proposal</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item active={isActive("/proposal/chosen")} href="/proposal/chosen">Chosen Course</NavDropdown.Item>
						<NavDropdown.Item active={isActive("/proposal/grades")} href="/proposal/grades">Group Grades</NavDropdown.Item>
						<NavDropdown.Item active={isActive("/proposal/rubric")} href="/proposal/rubric">Rubric</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default CustomNavbar;