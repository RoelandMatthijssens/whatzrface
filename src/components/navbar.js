import React from 'react'
import { Navbar as NavbarBootstrap } from 'react-bootstrap'

const Navbar = () => {
    return <NavbarBootstrap bg="dark" variant="dark">
        <NavbarBootstrap.Brand href="#home">NavbarBootstrap with text</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle />
        <NavbarBootstrap.Collapse className="justify-content-end">
            <NavbarBootstrap.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </NavbarBootstrap.Text>
        </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
}

export default Navbar