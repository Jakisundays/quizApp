import { Box, Container } from '@mui/system';
import {Route, Routes } from 'react-router-dom'
import FinalScreen from './Pages/FinalScreen';
import Questions from './Pages/Questions';
import Settings from './Pages/Settings';
import '/Users/jacobdominguez/Documents/codiyapa/quiz/src/App.css'

function App() {
  return (
    <Container maxWidth='sm'>
      <Box textAlign='center' mt={5} >
        <Routes>
          <Route index path='/quizApp' element={<Settings />} />
          <Route path='questions' element={<Questions />} />
          <Route path='score' element={<FinalScreen />} />
        </Routes>
      </Box>
    </Container>
    
  );
}

export default App;
