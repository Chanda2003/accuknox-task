


import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { removeWidget, showModal } from './Redux/action';

const DashboardSection = ({ title, widgets }) => {
  const dispatch = useDispatch();


  const handleAddWidget = () => {
    dispatch(showModal({ sectionTitle: title }));
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(title, widgetId))
  };

  return (
    <div className="mb-4">
      <h5>{title}</h5>
      <div className="d-flex flex-wrap">
        {
        widgets.map((widget) => (
          <Card key={widget.id} className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{widget.name}</Card.Title>
              <Card.Text>{widget.text}</Card.Text>
              <Button variant="danger" onClick={() => handleRemoveWidget(widget.id)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))
      // ))
      }
        <Button variant="primary" className="m-2" onClick={handleAddWidget}>
          + Add Widget
        </Button>
      </div>
    </div>
  );
};

export default DashboardSection;



