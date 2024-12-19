import React from 'react'

//import components and styles
import DestinationTabSection from './destination_tab_section/DestinationTabSection'
import './DestinationPageWrapper.css'
import './destination_tab_section/DestinationTabSection.css'

//component created with content that is used in every page except homepage.
//The content directly written in this component uses data that is not stored in database, so it's not dinamic content.
//This component integrates another component 'DestinationTabSection' that contains all the content created dinamically.
const DestinationPageWrapper = () => {
  return (
  <div className="destination-wrapper">
    <div className="destination-title">
      <span className="title-number heading-5">01</span>
      <span className="title-text heading-5">Pick your destination</span>
    </div>
    <DestinationTabSection />
  </div>
  )
}

export default DestinationPageWrapper;