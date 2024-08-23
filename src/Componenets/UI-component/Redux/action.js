export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const showModal = (sectionTitle) => ({
  type: SHOW_MODAL,
  payload: sectionTitle,
});

export const hideModal = () => ({ type: HIDE_MODAL });

export const addWidget = (sectionTitle, widget) => ({
  type: ADD_WIDGET,
  payload: { sectionTitle, widget },
});

export const removeWidget = (sectionTitle, widgetId) => ({
  type: REMOVE_WIDGET,
  payload: { sectionTitle, widgetId },
});


  
