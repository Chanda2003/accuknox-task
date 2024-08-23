


import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal,  ADD_WIDGET } from './Redux/action';

const AddWidgetModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modal.showModal);
  const sectionTitle = useSelector((state) => state.modal.sectionTitle);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

//  console.log(sectionTitle)

  const handleConfirm = () => {
dispatch({
  type: ADD_WIDGET,
  payload: {
    sectionTitle: sectionTitle,
    widget: { id: Date.now(), name:widgetName , text:widgetText}
  }
});


    setWidgetName('');
    setWidgetText('');
    dispatch(hideModal());
  };

  return (
    <Modal show={showModal} onHide={() => dispatch(hideModal())} className='modal-dialog-right modal-content' >
      <Modal.Header closeButton>
        <Modal.Title>Add Widget</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <Form>
          <Form.Group>
            <Form.Label>Widget Name</Form.Label>
            <Form.Control
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Widget Text</Form.Label>
            <Form.Control
              type="text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(hideModal())}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddWidgetModal;
































































































// // Action to remove a widget
// dispatch({
//   type: REMOVE_WIDGET,
//   payload: {
//     sectionId: 1,
//     widgetId: 1
//   }
// });

    // dispatch(addWidget({ sectionId, widget: { id: Date.now(), name: widgetName, text: widgetText } }));