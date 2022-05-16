import {React} from 'react'
import Home from './Pages/Home'
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
                                {/* <Route path='Characters' element={(<Character/>)} />
                                <Route path='Television' element={(<Television/>)} />
                                <Route path='Movies' element={(<Movies/>)} />
                                <Route path='VideoGames' element={(<VideoGames/>)} /> */}
                            </Routes>
                        </div>
                    <Footer/>
                </Router>
        </div>
    )
}

export default App
