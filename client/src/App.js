import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherPdf from './templates/TeacherPdf';
import KlassPdf from './templates/KlassPdf';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>    
            
            <Route path="/teacher-pdf" element={<TeacherPdf />} />
            <Route path="/klass-pdf" element={<KlassPdf />}/>

          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
