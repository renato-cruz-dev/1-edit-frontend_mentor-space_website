import React, { useState } from 'react';

//import data from database
import {destinations} from '../../../data.json';

//Buttons component created dinamically with the data imported above.
//The button will display the name of each destination, and that's why the content of each button is tab.name.
const TabButtons = ({ tabs, activeTab, setActiveTab }) => tabs.map((tab, index) => {
  return (<button key={index} className={`tab-btn-text-destinations nav-text ${activeTab === tab.name ? 'active-destination' : ''}`} onClick={() => setActiveTab(tab.name)}>{tab.name}</button>);
});

//Tab content component, which content is created dinamically with data from database.
const TabContent = ({ tabs, activeTab, setActiveTab }) => tabs.map((tab, index) => {
  return (
    activeTab === tab.name ? 
    <div key ={index} className="tab-content-destinations">
      <img src={tab.images.png} alt={tab.name} className="destination-image" />
      <div className="destination-info">
        <div className="tab-buttons-destinations">
        <TabButtons tabs={destinations} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
        <h3 className="destination-name heading-2">{tab.name}</h3>
        <p className="destination-description">{tab.description}</p>
        <div className="destination-line"></div>
        <div className="destination-location">
          <div className="location-distance">
            <p className="avg-distance-title sub-heading-2">avg. distance</p>
            <p className="avg-distance-value sub-heading-1">{tab.distance}</p>
          </div>
          <div className="location-travel">
            <p className="travel-time-title sub-heading-2">est. travel time</p>
            <p className="travel-time-value sub-heading-1">{tab.travel}</p>
          </div>
        </div>
      </div>
    </div> 
    : null
  );
});

//Initial value for destination defined as 'Moon'.
const DestinationTabSection = () => {
  const [activeTab, setActiveDestinationTab] = useState('Moon');

return (
  <div className="tab-section-destinations">
    <TabContent tabs={destinations} activeTab={activeTab} setActiveTab={setActiveDestinationTab}/>
  </div>
)
}

export default DestinationTabSection;