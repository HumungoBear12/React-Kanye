import {React} from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Songs from './Pages/Songs'
import History from './Pages/History'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return ( 
        <div>
            <Router>
                    <div>
                        <Navbar />
                            <p style={{height: '10vh'}} />
                            <Routes>
                                <Route index element={<Home />} />
                                <Route path='about' element={(<About/>)} />
                                <Route path='Television' element={(<Songs/>)} />
                                <Route path='Movies' element={(<History/>)} />
                                {/* <Route path='VideoGames' element={(</>)} /> */}
                            </Routes>
                        </div>
                    <Footer/>
                </Router>
        </div>
    )
}

export default App
