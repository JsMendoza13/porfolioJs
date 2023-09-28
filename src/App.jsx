import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
function App() {
  return (
 <Router>

  <Routes>
      <Route path="/" elment={<Main />}>
      <Route path="*" element= {<div>404</div>} /> 

     </Route>
    </Routes>
    </Router> 
    )
}

export default App
