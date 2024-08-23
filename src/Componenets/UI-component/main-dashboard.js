


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './navbar';
import DashboardSection from './dashboard';
import AddWidgetModal from './add-widget';

const Dashboard = () => {
  const sections = useSelector((state) => state.widgets);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
useEffect(()=>{
    const filtered = sections.map((section) => ({
      ...section,
      widgets: section.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }));
    console.log(filtered)
    setFilteredSections(filtered);


},[sections, searchQuery])


 

  return (
    <div className="container">
      <NavBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      {filteredSections.map((section) => (
        <DashboardSection
          key={section.id}
          title={section.title}
          sectionId={section.title}
          widgets={section.widgets}
        />
      ))}
      <AddWidgetModal />
    </div>
  );
};

export default Dashboard;



