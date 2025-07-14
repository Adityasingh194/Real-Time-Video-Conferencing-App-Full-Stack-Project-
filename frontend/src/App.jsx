import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/videoMeet'; // Correct

import HomeComponent from './pages/home';
 import History from './pages/history';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/auth' element={<Authentication />} />

           <Route path='/home' element={<HomeComponent />} />
             <Route path='/history' element={<History />} /> 

          <Route path='/:url' element={<VideoMeetComponent />} />
          <Route path='*' element={<div>404: Not Found</div>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
