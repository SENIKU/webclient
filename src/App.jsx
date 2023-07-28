
import { 
  Route,  
  BrowserRouter as Router, 
  Routes 
} from 'react-router-dom'
// import Footer from './components/footer/footer'
// import Navigation from './components/navigation/navigation'
import PertunjukanPage from './pages/pertunjukanpages'
import PertunjukanDetail from './pages/pertunjukandetail'

function App() {
 

  return (
    <div>
        <Router>
          {/* <Navigation /> */}
          <Routes>

            <Route path="/" element={<PertunjukanPage />} />
            <Route path="/pertunjukan" element={<PertunjukanPage />} />
            <Route path="/pertunjukan/:id" element={<PertunjukanDetail />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
    </div>
   
  )
}

export default App
