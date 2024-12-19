import React from 'react'

//import components and styles
import CrewTabSection from './crew_tab_section/CrewTabSection'
import './CrewPageWrapper.css'
import './crew_tab_section/CrewTabSection.css'

//component created with content that is used in every page except homepage.
//The content directly written in this component uses data that is not stored in database, so it's not dinamic content.
//This component integrates another component 'CrewTabSection' that contains all the content created dinamically.
const CrewPageWrapper = () => {
  return (
  <>
    <div className="crew-title">
      <span className="title-number heading-5">02</span>
      <span className="title-text heading-5">Meet your crew</span>
    </div>
    <CrewTabSection />
  </>
  )
}

export default CrewPageWrapper;