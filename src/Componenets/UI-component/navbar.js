


import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from './Redux/action';

const NavBar = ({ searchQuery, onSearchChange}) => {
  const dispatch = useDispatch();
  const widgets = useSelector(state => state.widgets);


  console.log(widgets[0].title)

  const handleAddWidget = () => {
    dispatch(showModal({sectionTitle: widgets[0].title}));
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-9">
        <Navbar.Brand href="#">Dashboard V2</Navbar.Brand>
        <Form inline className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search anything..."
            className="mr-sm-2"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {/* <Button variant="outline-success" onClick={onSearch}>
            Search
          </Button> */}
        </Form>
        <Button variant="outline-primary" onClick={handleAddWidget} style={{ marginLeft: '20px' }}>
          + Add widget
        </Button>
      </Navbar>

      {widgets.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {widgets.map((widget, index) => (
            <h5 key={index}>{widget.name}</h5>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;

