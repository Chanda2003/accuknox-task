import { combineReducers } from 'redux';
import { SHOW_MODAL, HIDE_MODAL, ADD_WIDGET, REMOVE_WIDGET } from './action';


const initialModalState = {
  showModal: false,
  sectionTitle: '',
  
};

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: true, sectionTitle: action.payload.sectionTitle };
    case HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};


const initialWidgetsState = [
  {
    id: 1,
    title: 'CSPM Executive Dashboard',
    widgets: [
      { id: 1, name: 'Cloud Accounts', text: 'Random text for Cloud Accounts widget.' },
      { id: 2, name: 'Cloud Account Risk Assessment', text: 'Random text for Risk Assessment widget.' },
    ],
  },
  {
    id: 2,
    title: 'CWPP Dashboard',
    widgets: [
      { id: 3, name: 'Top 5 Namespace Specific Alerts', text: 'Random text for Alerts widget.' },
      { id: 4, name: 'Workload Alerts', text: 'Random text for Workload Alerts widget.' },
    ],
  },
  {
    id: 3,
    title: 'Registry Scan',
    widgets: [
      { id: 5, name: 'Image Risk Assessment', text: 'Random text for Risk Assessment widget.' },
      { id: 6, name: 'Image Security Issues', text: 'Random text for Security Issues widget.' },
    ],
  },
];

const widgetsReducer = (state = initialWidgetsState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return state.map((section) =>
        section.title === action.payload.sectionTitle
          ? {
              ...section,
              widgets: [...section.widgets, action.payload.widget],
            }
          : section
      );
     
        case REMOVE_WIDGET:
          return state.map((section) =>
            section.title === action.payload.sectionTitle
              ? {
                  ...section,
                  widgets: section.widgets.filter((widget) => widget.id !== action.payload.widgetId),
                }
              : section
          );
   
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  modal: modalReducer,
  widgets: widgetsReducer,
});



  