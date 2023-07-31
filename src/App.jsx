
import { 
  Route,  
  BrowserRouter as Router , 
  Routes 
} from 'react-router-dom'
import PertunjukanPage from './pages/pertunjukanpages'
import PertunjukanDetail from './pages/pertunjukandetail'
import Homepages from './pages/Homepages'
import NotPages from './pages/notfoundpages'
import MusikPages from './pages/MusikPages'
import MusikDetailPages from './pages/detailMusik'
import PagesRegister from './pages/registerpages'
import PagesLogin from './pages/loginpages'


function App() {
 

  return (
    <div>
        <Router>
          {/* <Navigation /> */}
          <Routes>

            <Route exact path="/" element={<Homepages />} />
            <Route path="/pertunjukan" element={<PertunjukanPage />} />
            <Route path="/pertunjukan/:id" element={<PertunjukanDetail />} />
        
            <Route path="/musik" element={<MusikPages />} />
            <Route path="/musik/:id" element={<MusikDetailPages />} />

            {/* Authentication */}
            <Route path="/register" element={<PagesRegister />} />
            <Route path="/login" element={<PagesLogin />} />

            {/* Route for handling URL not found */}
            <Route path='*' element={<NotPages />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
    </div>
   
  )
}

export default App
