import React from 'react'

//The content directly written in this component uses data that is not stored in database, so it's not dinamic content.
const HomePageWrapper = () => (
  <div className='homepage-wrapper'>
    <div className="homepage-wrapper-text">
      <p className="heading-5">so, you want to travel to</p>
      <p className="heading-1">space</p>
      <p className="homepage-wrapper-descriptive-p">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
    </div>
    <div className="homepage-wrapper-btn-container">
      <div className="homepage-wrapper-btn-shadow">
        <button className="homepage-wrapper-btn heading-4">explore</button>
      </div>
    </div>
  </div>
)

export default HomePageWrapper;
