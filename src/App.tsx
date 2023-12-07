import {Route, Routes} from 'react-router-dom';
import Toolbar from './component/Toolbar/Toolbar';
import EditForm from './component/EditForm/EditForm.tsx';
import DisplayElement from './component/DisplayElement/DisplayElement';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';

function App() {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/pages/:pageName"
                 element={(<DisplayElement />)}/>
          <Route path="/pages/admin"
                 element={(<EditForm />)}/>
          <Route path="*" element={(
            <div className="container-fluid pic-container">
              <img
                className="pic-notfound"
                src={PageNoFoundPicture}
                alt="Page Not Found"/>
            </div>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
