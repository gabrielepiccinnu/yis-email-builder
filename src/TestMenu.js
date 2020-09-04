import React, { useState, Component } from 'react';

import { NavDropdown } from 'react-bootstrap';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
<NavDropdownMenu title="Dropdown R" id="collasible-nav-dropdown" alignRight >
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<DropdownSubmenu href="#action/3.7" title="Text to show">
  <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
  <DropdownSubmenu href="#action/3.7" title="Text to show">
    <NavDropdown.Item href="#action/9.1">
      Sub 2
    </NavDropdown.Item>
  </DropdownSubmenu>
</DropdownSubmenu>
</NavDropdownMenu>
    
</>
    );
  }
  
export default Example