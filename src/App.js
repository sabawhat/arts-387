import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

import StartButton from './components/startComponent';
import StartPage from './pages/startPage';
import LocationPage from './pages/locationPage';
import GeneralPage from './pages/generalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<StartButton />} />
          <Route path="start" element={<StartPage />} />
          <Route path="general" element={<LocationPage />} />
          <Route path="a-healing-place" element={<GeneralPage />}/>
          <Route path="a-soft-place" element={<GeneralPage />}/>
          <Route path="a-chaotic-place" element={<GeneralPage />}/>
          <Route path="an-eternal-place" element={<GeneralPage />}/>
          <Route path="an-empty-place" element={<GeneralPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App