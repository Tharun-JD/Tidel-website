import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FindSpace from './FindSpace'
import AboutUs from './AboutUs'
import WhyTidel from './WhyTidel'
import Support from './Support'
import Tenders from './Tenders'
import Announcements from './Announcements'
import Blogs from './Blogs'
import Events from './Events'
import Locations from './Locations'
import LifeAtTidel from './LifeAtTidel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-space" element={<FindSpace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-tidel" element={<WhyTidel />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/life-at-tidel" element={<LifeAtTidel />} />
      </Routes>
    </Router>
  )
}

export default App
