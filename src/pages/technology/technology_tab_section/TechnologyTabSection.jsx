import React, { useState } from 'react'

//import data from database
import {technology} from '../../../data.json'

//Buttons component created dinamically with the data imported above.
//The button will display int numbers starting in number 1, and that's why the content of each button is index + 1.
const TabButtons = ({ tabs, activeTab, setActiveTab }) => tabs.map((tab, index) => {
  return (<button key={index} className={`tab-btn-technology heading-4 ${activeTab === index ? 'active-technology' : ''}`} onClick={() => setActiveTab(index)}>{index + 1}</button>);
});

//Tab content component, which content is created dinamically with data from database.
const TabContent = ({ tabs, activeTab, setActiveTab }) => tabs.map((tab, index) => {
  return (
    activeTab === index ? 
    <div key={index} className="tab-content-technology">
      <div className="text-container">
        <div className="tab-buttons-technology">
          <TabButtons tabs={technology} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
        <div className="technology-info">
          <p className="technology-terminology-label">the terminology...</p>
          <h2 className="technology-terminology-title heading-3">{tab.name}</h2>
          <p className="technology-terminology-text">{tab.description}</p>
        </div>
      </div>
      <div className='img-container'>
        <img src={tab.images.portrait} alt={tab.name} className="technology-image-portrait" />
        <img src={tab.images.landscape} alt={tab.name} className="technology-image-landscape" />
      </div>
    </div> 
    : null
  );
});

const TechnologyTabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

return (
  <div className="tab-section-technology">
    <TabContent tabs={technology} activeTab={activeTab} setActiveTab={setActiveTab}/>
  </div>
)
}

export default TechnologyTabSection;