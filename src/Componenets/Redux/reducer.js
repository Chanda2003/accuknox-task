// reducer.js
// import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGETS } from './actions';

import { ADD_WIDGET, REMOVE_WIDGET, SEARCH_WIDGETS } from "./action";

const initialState = {
  categories: [
    {
      id: '1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: '101', name: 'Widget 1', text: 'This is some random text for Widget 1.' },
        { id: '102', name: 'Widget 2', text: 'This is some random text for Widget 2.' },
      ],
    },
    {
      id: '2',
      name: 'Category 2',
      widgets: [],
    },
  ],
  searchResults: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        ),
      };

    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter((widget) => widget.id !== action.payload.widgetId),
              }
            : category
        ),
      };

    case SEARCH_WIDGETS:
      const searchResults = [];
      state.categories.forEach((category) => {
        category.widgets.forEach((widget) => {
          if (widget.name.toLowerCase().includes(action.payload.toLowerCase())) {
            searchResults.push(widget);
          }
        });
      });
      return {
        ...state,
        searchResults,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
