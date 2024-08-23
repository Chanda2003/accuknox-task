import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addWidget, removeWidget, searchWidgets } from './actions';
import { addWidget, removeWidget, searchWidgets } from './Redux/action';

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWidget = (categoryId) => {
    const widgetName = prompt('Enter Widget Name:');
    const widgetText = prompt('Enter Widget Text:');
    const newWidget = {
      id: new Date().getTime().toString(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget(categoryId, newWidget));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  const handleSearch = () => {
    dispatch(searchWidgets(searchTerm));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Widgets" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {searchResults.map((widget) => (
            <div key={widget.id}>
              <p>{widget.name}: {widget.text}</p>
            </div>
          ))}
        </div>
      )}
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <button onClick={() => handleAddWidget(category.id)}>+ Add Widget</button>
          {category.widgets.map((widget) => (
            <div key={widget.id}>
              <p>{widget.name}: {widget.text}</p>
              <button onClick={() => handleRemoveWidget(category.id, widget.id)}>Remove Widget</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
