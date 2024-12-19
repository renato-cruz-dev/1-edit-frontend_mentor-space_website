import React, { useState } from 'react'

//import data from database
import {crew} from '../../../data.json'

//Buttons component created dinamically with the data imported above.
//In this case, the most important is to get the number of crew members and display a button for each of them.
const TabButtons = ({ tabs, activeTab, setActiveTab }) => tabs.map((tab, index) => {
  return (<button key={index} className={`tab-btn-crew ${activeTab === index ? 'active-crew' : ''}`} onClick={() => setActiveTab(index)}></button>);
});


//Tab content component, which content is created dinamically with data from database.
const TabContent = ({ tabs, activeTab, setActiveTab }) => tabs.map((tab, index) => {
  return (
    activeTab === index ? 
    <div key={index} className="tab-content-crew">
      <div className="crew-info">
        <h3 className="crew-member-position heading-4">{tab.role}</h3>
        <h2 className="crew-member-name heading-3">{tab.name}</h2>
        <p className="crew-member-bio">{tab.bio}</p>
        <div className="tab-buttons-crew">
          <TabButtons tabs={crew} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
      </div>
      <img src={tab.images.png} alt={tab.name} className="crew-member-image" />
    </div> 
    : null
  );
});

//Initial value set for the first button.
const CrewTabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

return (
  <div className="tab-section-crew">
    <div className="outlet-crew">
      <TabContent tabs={crew} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  </div>
)
}

export default CrewTabSection;