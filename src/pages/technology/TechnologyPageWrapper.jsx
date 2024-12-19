import React from 'react'

//import components and styles
import TechnologyTabSection from './technology_tab_section/TechnologyTabSection'
import './TechnologyPageWrapper.css'
import './technology_tab_section/TechnologyTabSection.css'

//component created with content that is used in every page except homepage.
//The content directly written in this component uses data that is not stored in database, so it's not dinamic content.
//This component integrates another component 'TechnologyTabSection' that contains all the content created dinamically.
const TechnologyPageWrapper = () => {
  return (
    <div className="technology-wrapper">
      <div className="technology-title">
        <span className="title-number heading-5">03</span>
        <span className="title-text heading-5">Space launch 101</span>
      </div>
      <TechnologyTabSection />
    </div>
  )
}

export default TechnologyPageWrapper;