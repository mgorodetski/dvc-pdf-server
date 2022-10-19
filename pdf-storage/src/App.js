import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KlassPdf from './klassPdf/KlassPdf';
import TeacherPdf from './teacherPdf/TeacherPdf';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/teacher-pdf" exact component={TeacherPdf} />
          <Route path="/klass-pdf" exact component={KlassPdf} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
