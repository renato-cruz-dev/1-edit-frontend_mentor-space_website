import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

//import components and styles
import './reset.css'
import MenuBar from './components/MenuBar/MenuBar'
import './components/MenuBar/MenuBar.css'
import HomePageWrapper from './pages/homepage/HomePageWrapper/HomePageWrapper'
import './pages/homepage/HomePageWrapper/HomePageWrapper.css'
import DestinationPageWrapper from './pages/destination/DestinationPageWrapper'
import './pages/destination/DestinationPageWrapper.css'
import CrewPageWrapper from './pages/crew/CrewPageWrapper'
import './pages/crew/CrewPageWrapper.css'
import TechnologyPageWrapper from './pages/technology/TechnologyPageWrapper'
import './pages/technology/TechnologyPageWrapper.css'

//Used react router for menubar interactions with wrappers
function App() {
  return (
      <Router>
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePageWrapper />}/>
          <Route path="/destination" element={<DestinationPageWrapper />}/>
          <Route path="/crew" element={<CrewPageWrapper />}/>
          <Route path="/technology" element={<TechnologyPageWrapper />}/>
        </Routes>
      </Router>
  )
}

export default App
